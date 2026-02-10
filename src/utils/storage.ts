import { Configuration } from '../types';

const STORAGE_KEY = 'configuratore-configurations';

export const saveConfiguration = (config: Configuration): void => {
  try {
    const configs = getAllConfigurations();
    const index = configs.findIndex(c => c.id === config.id);
    
    if (index >= 0) {
      configs[index] = config;
    } else {
      configs.push(config);
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(configs));
  } catch (error) {
    console.error('Errore nel salvataggio della configurazione:', error);
  }
};

export const getAllConfigurations = (): Configuration[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Errore nel caricamento delle configurazioni:', error);
    return [];
  }
};

export const getConfiguration = (id: string): Configuration | null => {
  const configs = getAllConfigurations();
  return configs.find(c => c.id === id) || null;
};

export const deleteConfiguration = (id: string): void => {
  try {
    const configs = getAllConfigurations();
    const filtered = configs.filter(c => c.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Errore nella cancellazione della configurazione:', error);
  }
};

export const exportConfiguration = (config: Configuration): void => {
  try {
    const dataStr = JSON.stringify(config, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `configurazione-${config.name}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Errore nell\'export della configurazione:', error);
  }
};

export const importConfiguration = (file: File): Promise<Configuration> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const config = JSON.parse(e.target?.result as string);
        config.id = `imported-${Date.now()}`;
        config.updatedAt = new Date().toISOString();
        resolve(config);
      } catch (error) {
        reject(new Error('File JSON non valido'));
      }
    };
    
    reader.onerror = () => reject(new Error('Errore nella lettura del file'));
    reader.readAsText(file);
  });
};

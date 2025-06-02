/**
 * Saves data to localStorage
 */
export const saveToStorage = (key: string, value: any): void => {
  try {
    localStorage.setItem(`md-to-pdf-${key}`, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

/**
 * Loads data from localStorage
 */
export const loadFromStorage = (key: string): any => {
  try {
    const value = localStorage.getItem(`md-to-pdf-${key}`);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
    return null;
  }
};

/**
 * Clears a specific item from localStorage
 */
export const clearFromStorage = (key: string): void => {
  try {
    localStorage.removeItem(`md-to-pdf-${key}`);
  } catch (error) {
    console.error(`Error clearing ${key} from localStorage:`, error);
  }
};

/**
 * Clears all app data from localStorage
 */
export const clearAllStorage = (): void => {
  try {
    Object.keys(localStorage)
      .filter(key => key.startsWith('md-to-pdf-'))
      .forEach(key => localStorage.removeItem(key));
  } catch (error) {
    console.error('Error clearing all data from localStorage:', error);
  }
};
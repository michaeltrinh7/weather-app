import { DateTime } from 'luxon';

export function formatDate(date: Date, format: string = 'cccc dd\'th\' MMMM HH:mm'): string {
     return DateTime.fromJSDate(date).toFormat(format);
}

export function getFormattedTime(timestamp: number, locale: string) {
     // Create a date from the timestamp
     const date = new Date(timestamp * 1000);
   
     // Return appropriately formatted time
     return new Intl.DateTimeFormat(locale, {
          hour: 'numeric',
          minute: 'numeric'
       }).format(date);
   
}
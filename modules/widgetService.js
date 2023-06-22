import { fetchWeather } from './APIservice.js';
import {
    renderWidgetOther,    
    renderWidgetToday, 
    renderWidgetForecast,
} from './render.js';

export const startWidget = async () => {
    const widget = document.createElement('div');
    widget.classList.add('widget');

    const dataWeather = await fetchWeather('Минск');

    if (dataWeather.success){
        renderWidgetToday(widget, dataWeather.data);
        renderWidgetOther(widget, dataWeather.data);
    } else showError();

    
    renderWidgetForecast(widget);

    return widget;
};

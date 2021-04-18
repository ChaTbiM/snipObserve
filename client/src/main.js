import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'

import { IonApp, IonCard, IonContent, IonHeader, IonIcon, IonicVue, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';


const app = createApp(App).use(store)
  .use(IonicVue)
  .use(router);

app.component('ion-router-outlet', IonRouterOutlet);
app.component('ion-app', IonApp);

app.component('ion-page', IonPage);
app.component('ion-content', IonContent);
app.component('ion-header', IonHeader);
app.component('ion-toolbar', IonToolbar);
app.component('ion-menu-button', IonMenuButton);
app.component('ion-menu', IonMenu);
app.component('ion-label', IonLabel);
app.component('ion-input', IonInput);
app.component('ion-card', IonCard);
app.component('ion-list', IonList);
app.component('ion-list-header', IonListHeader);

app.component('ion-item', IonItem);
app.component('ion-icon', IonIcon);
app.component('ion-title', IonTitle);





router.isReady().then(() => {
  app.mount('#app');
});
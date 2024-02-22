import { Routes } from '@angular/router';
import { DevjobsCardComponent } from './devjobs-card/devjobs-card.component';
import { JobInfoComponent } from './job-info/job-info.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Devjobs-web-app - Home Page',
        component: DevjobsCardComponent
    },
    {
        path: ':id',
        title: 'Devjobs-web-app - Job Details',
        component: JobInfoComponent
    },
    {
        path: '**',
        redirectTo: '',
        component: DevjobsCardComponent
    }
];

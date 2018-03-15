import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplication2SharedModule } from '../../shared';
import {
    LabelService,
    LabelPopupService,
    LabelComponent,
    LabelDetailComponent,
    LabelDialogComponent,
    LabelPopupComponent,
    LabelDeletePopupComponent,
    LabelDeleteDialogComponent,
    labelRoute,
    labelPopupRoute,
} from './';

const ENTITY_STATES = [
    ...labelRoute,
    ...labelPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSampleApplication2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        LabelComponent,
        LabelDetailComponent,
        LabelDialogComponent,
        LabelDeleteDialogComponent,
        LabelPopupComponent,
        LabelDeletePopupComponent,
    ],
    entryComponents: [
        LabelComponent,
        LabelDialogComponent,
        LabelPopupComponent,
        LabelDeleteDialogComponent,
        LabelDeletePopupComponent,
    ],
    providers: [
        LabelService,
        LabelPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplication2LabelModule {}

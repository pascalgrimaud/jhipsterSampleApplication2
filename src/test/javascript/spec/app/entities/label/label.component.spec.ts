/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { JhipsterSampleApplication2TestModule } from '../../../test.module';
import { LabelComponent } from '../../../../../../main/webapp/app/entities/label/label.component';
import { LabelService } from '../../../../../../main/webapp/app/entities/label/label.service';
import { Label } from '../../../../../../main/webapp/app/entities/label/label.model';

describe('Component Tests', () => {

    describe('Label Management Component', () => {
        let comp: LabelComponent;
        let fixture: ComponentFixture<LabelComponent>;
        let service: LabelService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterSampleApplication2TestModule],
                declarations: [LabelComponent],
                providers: [
                    LabelService
                ]
            })
            .overrideTemplate(LabelComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(LabelComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LabelService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new Label(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.labels[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});

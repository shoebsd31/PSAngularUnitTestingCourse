import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroComponent } from "./hero.component"

describe('Hero Component (shallow tests)',()=>{
    let fixture:ComponentFixture<HeroComponent>;
beforeEach(()=>{
    TestBed.configureTestingModule({
        declarations:[HeroComponent],
        schemas:[NO_ERRORS_SCHEMA]
    });

    fixture=TestBed.createComponent(HeroComponent);    
})

it('should have correct hero',()=>{
    fixture.componentInstance.hero={id:1,name:'SuperDude',strength:3};
    expect(fixture.componentInstance.hero.name).toBe('SuperDude');
});

it('should render hero name and anchor tag',()=>{
    fixture.componentInstance.hero={id:1,name:'SuperDude',strength:3};
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude')
});

})
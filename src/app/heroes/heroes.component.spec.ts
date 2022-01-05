import { componentFactoryName } from "@angular/compiler";
import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe('Heroes Component',()=>{
let heroesComponent:HeroesComponent;
let heroes;
let mockHeroService;

beforeEach(()=>{
    heroes=[
        {id:1,name:'Spider man',strength:8},
        {id:2,name:'Wonder woman',strength:24},
        {id:3,name:'Bat man',strength:55},
    ];

    mockHeroService=jasmine.createSpyObj(['getHeroes','addHero','deleteHero'])
    heroesComponent=new HeroesComponent(mockHeroService);
})

 describe('delete',()=>{
     it('should remove the indicated hero from the heroes list',()=>{
        mockHeroService.deleteHero.and.returnValue(of(true));
        heroesComponent.heroes=heroes;

        heroesComponent.delete(heroes[2]);

        expect(heroesComponent.heroes.length).toBe(2);
     });

     it('should call deleteHero',()=>{
        mockHeroService.deleteHero.and.returnValue(of(true));
        heroesComponent.heroes=heroes;
        
        heroesComponent.delete(heroes[2]);

        expect(mockHeroService.deleteHero).toHaveBeenCalledWith(heroes[2]);
        // expect(mockHeroService.deleteHero).
     });
 })

})
describe('API Test', () => {
    it('should assert R2-D2’s skin color is white and blue', () => {
       
      cy.request('https://swapi.dev/api/people/')
        .should((response) => {

          expect(response.status).to.eq(200);
  
          const r2d2 = response.body.results.find(character => character.name === 'R2-D2');
  
          expect(r2d2, 'R2-D2 not found in API response').to.exist;
  
          expect(r2d2.skin_color).to.include('white');
          expect(r2d2.skin_color).to.include('blue');
        });
    });
  });
  
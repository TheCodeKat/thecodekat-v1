describe('shared-ui: TestArticle component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testarticle--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to TestArticle!');
    });
});

describe('API Echo Server - POST & DELETE Tests', () => {
    const baseUrl = 'https://echo-serv.tbxnet.com/v1';
  
    it('POST /test - Should echo query text correctly', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/test?text=testing`,
        body: '',
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200); // Código de estado
        expect(response.duration).to.be.lessThan(3000); // Tiempo de respuesta
  
        // Validación del contenido del body
        expect(response.body).to.have.property("method", "POST");
        expect(response.body).to.have.property("query");
        expect(response.body.query).to.have.property("text", "testing");
  
        // Validación de headers
        expect(response.headers).to.have.property("content-type");
      });
    });
  
    it('DELETE /test - Should respond with basic request info', () => {
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/test`,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.lessThan(3000);
  
        // Validaciones del body
        expect(response.body).to.have.property("method", "DELETE");
        expect(response.body).to.have.property("headers");
        expect(response.body.headers).to.have.property("host", "echo-serv.tbxnet.com");
  
        // Como el body está vacío, lo validamos también
        expect(response.body.body).to.be.an("object").that.is.empty;
      });
    });
  });
  
    
      
  
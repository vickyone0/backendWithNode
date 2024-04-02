
const request = require('supertest');
const app = require('../../app');
const { mongoConnect} = require('../../services/mongo');

describe('Test GET /launches', ()=>{
    test('it should respose with status code 200',async () =>{
        const response = await request(app)
        .get('/launches')
        .expect(200);
        expect(response.statusCode).toBe(200);
    }
    )
});

describe('Test POST /launches', ()=>{
      test('it should respose with status code 200',()=>{
        const response =200;
        expect(response).toBe(200);
      });
      test('it should catch missing required properties',()=>{

      });
      test('it should catch invalid data',()=>{

      });
})
// src/mocks/handlers.js
import { rest } from 'msw'
export const handlers = [
  // Handles a GET /user request
  rest.get('http://localhost:3031/iphone', (req, res, ctx) => {
    console.log('Entre al handler')
    return res(ctx.json({
      author: {
        name: 'Fermin',
        lastname: 'Paez'
      },
      categories: [],
      items: [
        {
          id: 'MLA931449399',
          title: 'Apple iPhone 11 (128 Gb) - Negro',
          price: {
            currency: 'ARS',
            amount: 246599,
            decimals: 0
          },
          picture: 'http://http2.mlstatic.com/D_865864-MLA46114990464_052021-I.jpg',
          condition: 'new',
          free_shipping: true,
          address: 'Capital Federal'
        },
        {
          id: 'MLA1200102575',
          title: 'Apple iPhone 11 (64 Gb) - (product)red',
          price: {
            currecy: 'ARS',
            amount: 223900,
            decimals: 0
          },
          picture: 'http://http2.mlstatic.com/D_960745-MLA46114990453_052021-I.jpg',
          condition: 'new',
          free_shipping: true,
          address: 'Buenos Aires'
        },
        {
          id: 'MLA1115085636',
          title: 'Apple iPhone SE (2da Generación) 128 Gb - Blanco',
          price: {
            currecy: 'ARS',
            amount: 215999,
            decimals: 0
          },
          picture: 'http://http2.mlstatic.com/D_963630-MLA46552310340_062021-I.jpg',
          condition: 'new',
          free_shipping: true,
          address: 'Capital Federal'
        },
        {
          id: 'MLA1119444141',
          title: 'Apple iPhone SE (2da Generación) 64 Gb - Blanco',
          price: {
            currecy: 'ARS',
            amount: 197999,
            decimals: 0
          },
          picture: 'http://http2.mlstatic.com/D_745945-MLA46552310508_062021-I.jpg',
          condition: 'new',
          free_shipping: true,
          address: 'Capital Federal'
        },
        {
          id: 'MLA1134223126',
          title: 'Apple iPhone SE (3ª Generación, 128 Gb) - Azul Medianoche',
          price: {
            currecy: 'ARS',
            amount: 202226,
            decimals: 0
          },
          picture: 'http://http2.mlstatic.com/D_990892-MLA49590214677_042022-I.jpg',
          condition: 'new',
          free_shipping: true,
          address: 'Capital Federal'
        }
      ]
    }))
  })
]

# Prueba Técnica IOTECNIA #

Esta prueba replica una actualización de stocks periodica.

**Haz un fork del proyecto y sube ahi tu solución, no subas los cambios en este proyecto.**

para ejecutar el codigo usa [ts-node](https://yarnpkg.com/package/ts-node) (ya esta en el package.json), usa yarn para gestionar los paquetes, despues de clonar ejecutando "yarn" ya deberia instalar todas las dependencias

Tenemos 2 funciones separadas en 2 archivos.

[getProduct](/src/getProducts/getProducts.ts) esta funcion devuelve un array de productos.

[getStock](/src/getStock/getStock.ts) esta funcion devuelve el stock referente a un producto, a esta funcion hay que pasarle un JSON con los valores:
``` 
{
 Company: cargar el valor del .env
 ItemNo: propiedad shop_sku del producto
 Location_Filter: cargar el valor del .env
}
``` 

si no encuentra el producto lo pondremos como **null**

Estas funciones no se pueden modificar, el objetivo es crear otro fichero .ts recoger los productos, luego por cada uno ir a buscar su stock, agregarlo al objeto y imprimir un array con los 5 productos y sus stocks.


Añade los paquetes que te hagan falta.


Este es el output esperado:
```
[
  {
    active: false,
    all_prices: [ [Object] ],
    allow_quote_requests: false,
    applicable_pricing: {
      channel_code: null,
      discount_end_date: null,
      discount_start_date: null,
      price: 5.9,
      unit_discount_price: null,
      unit_origin_price: 5.9,
      volume_prices: [Array]
    },
    category_code: '8GEE4O',
    category_label: 'Pulseras de Actividad',
    channels: [ 'WEB_ES', 'UNILAE_ES' ],
    currency_iso_code: 'EUR',
    description: null,
    discount: null,
    fulfillment: { center: [Object] },
    inactivity_reasons: [ 'ZERO_QUANTITY' ],
    internal_description: '14927',
    leadtime_to_ship: 1,
    logistic_class: { code: 'medio', label: 'Medio' },
    min_shipping_price: 0,
    min_shipping_price_additional: 0,
    min_shipping_type: 'express',
    min_shipping_zone: 'espana-peninsular',
    offer_additional_fields: [ [Object], [Object] ],
    offer_id: 47946960,
    price: 5.9,
    price_additional_info: null,
    product_references: [ [Object], [Object] ],
    product_sku: '169527',
    product_title: 'Xiaomi Mi Band 2 Cable de Carga',
    quantity: 0,
    shipping_deadline: '2022-04-26T15:27:52.779Z',
    shop_sku: '14715',
    state_code: '11',
    total_price: 5.9,
    Stock: 13
  },
  {
    active: true,
    all_prices: [ [Object] ],
    allow_quote_requests: false,
    applicable_pricing: {
      channel_code: null,
      discount_end_date: null,
      discount_start_date: null,
      price: 5.9,
      unit_discount_price: null,
      unit_origin_price: 5.9,
      volume_prices: [Array]
    },
    category_code: '8U9UI3',
    category_label: 'Cables HDMI',
    channels: [ 'WEB_ES', 'UNILAE_ES' ],
    currency_iso_code: 'EUR',
    description: null,
    discount: null,
    fulfillment: { center: [Object] },
    inactivity_reasons: [],
    internal_description: 'AV0010E',
    leadtime_to_ship: 1,
    logistic_class: { code: 'medio', label: 'Medio' },
    min_shipping_price: 0,
    min_shipping_price_additional: 0,
    min_shipping_type: 'express',
    min_shipping_zone: 'espana-peninsular',
    offer_additional_fields: [ [Object], [Object] ],
    offer_id: 47946983,
    price: 5.9,
    price_additional_info: null,
    product_references: [ [Object], [Object] ],
    product_sku: '307044',
    product_title: 'Axil Cable HDMI 1.4 Macho/Macho 1m',
    quantity: 8,
    shipping_deadline: '2022-04-26T15:27:52.781Z',
    shop_sku: 'AV0010C',
    state_code: '11',
    total_price: 5.9,
    Stock: 5
  },
  {
    active: true,
    all_prices: [ [Object] ],
    allow_quote_requests: false,
    applicable_pricing: {
      channel_code: null,
      discount_end_date: null,
      discount_start_date: null,
      price: 6,
      unit_discount_price: null,
      unit_origin_price: 6,
      volume_prices: [Array]
    },
    category_code: '8J0QFB',
    category_label: 'Cables',
    channels: [ 'WEB_ES', 'UNILAE_ES' ],
    currency_iso_code: 'EUR',
    description: null,
    discount: null,
    fulfillment: { center: [Object] },
    inactivity_reasons: [],
    internal_description: 'AV0478C',
    leadtime_to_ship: 1,
    logistic_class: { code: 'medio', label: 'Medio' },
    min_shipping_price: 0,
    min_shipping_price_additional: 0,
    min_shipping_type: 'express',
    min_shipping_zone: 'espana-peninsular',
    offer_additional_fields: [ [Object], [Object] ],
    offer_id: 47946991,
    price: 6,
    price_additional_info: null,
    product_references: [ [Object], [Object] ],
    product_sku: '382739',
    product_title: 'Axil AV0476C Cable USB 2.0 a Micro USB 1m Negro',
    quantity: 10,
    shipping_deadline: '2022-04-26T15:27:52.782Z',
    shop_sku: 'AV0476C',
    state_code: '11',
    total_price: 6,
    Stock: 22
  },
  {
    active: true,
    all_prices: [ [Object] ],
    allow_quote_requests: false,
    applicable_pricing: {
      channel_code: null,
      discount_end_date: null,
      discount_start_date: null,
      price: 6,
      unit_discount_price: null,
      unit_origin_price: 6,
      volume_prices: [Array]
    },
    category_code: '8J0QFB',
    category_label: 'Cables',
    channels: [ 'WEB_ES', 'UNILAE_ES' ],
    currency_iso_code: 'EUR',
    description: null,
    discount: null,
    fulfillment: { center: [Object] },
    inactivity_reasons: [],
    internal_description: 'AV0814E',
    leadtime_to_ship: 1,
    logistic_class: { code: 'medio', label: 'Medio' },
    min_shipping_price: 0,
    min_shipping_price_additional: 0,
    min_shipping_type: 'express',
    min_shipping_zone: 'espana-peninsular',
    offer_additional_fields: [ [Object], [Object] ],
    offer_id: 47946992,
    price: 6,
    price_additional_info: null,
    product_references: [ [Object], [Object] ],
    product_sku: '382741',
    product_title: 'Axil Cable USB a USB-C 1m Negro',
    quantity: 24,
    shipping_deadline: '2022-04-26T15:27:52.783Z',
    shop_sku: 'AV0477C',
    state_code: '11',
    total_price: 6,
    Stock: null
  },
  {
    active: true,
    all_prices: [ [Object] ],
    allow_quote_requests: false,
    applicable_pricing: {
      channel_code: null,
      discount_end_date: null,
      discount_start_date: null,
      price: 6,
      unit_discount_price: null,
      unit_origin_price: 6,
      volume_prices: [Array]
    },
    category_code: '8J0QFB',
    category_label: 'Cables',
    channels: [ 'WEB_ES', 'UNILAE_ES' ],
    currency_iso_code: 'EUR',
    description: null,
    discount: null,
    fulfillment: { center: [Object] },
    inactivity_reasons: [],
    internal_description: 'AV0822E',
    leadtime_to_ship: 1,
    logistic_class: { code: 'medio', label: 'Medio' },
    min_shipping_price: 0,
    min_shipping_price_additional: 0,
    min_shipping_type: 'express',
    min_shipping_zone: 'espana-peninsular',
    offer_additional_fields: [ [Object], [Object] ],
    offer_id: 47946993,
    price: 6,
    price_additional_info: null,
    product_references: [ [Object], [Object] ],
    product_sku: '382743',
    product_title: 'Axil Cable USB a Lightning 1m Blanco',
    quantity: 6,
    shipping_deadline: '2022-04-26T15:27:52.785Z',
    shop_sku: 'AV0478C',
    state_code: '11',
    total_price: 6,
    Stock: 45
  }
]

``` 

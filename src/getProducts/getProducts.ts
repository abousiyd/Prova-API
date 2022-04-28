import { sleep } from "sleepjs"

export const getProducts = async (): Promise<any> => {
    return await new Promise(async (res, rej) => {
        try {
            let products = {
                "offers": [
                    {
                        "active": false,
                        "all_prices": [
                            {
                                "channel_code": null,
                                "discount_end_date": null,
                                "discount_start_date": null,
                                "price": 5.9,
                                "unit_discount_price": null,
                                "unit_origin_price": 5.9,
                                "volume_prices": [
                                    {
                                        "price": 5.9,
                                        "quantity_threshold": 1,
                                        "unit_discount_price": null,
                                        "unit_origin_price": 5.9
                                    }
                                ]
                            }
                        ],
                        "allow_quote_requests": false,
                        "applicable_pricing": {
                            "channel_code": null,
                            "discount_end_date": null,
                            "discount_start_date": null,
                            "price": 5.9,
                            "unit_discount_price": null,
                            "unit_origin_price": 5.9,
                            "volume_prices": [
                                {
                                    "price": 5.9,
                                    "quantity_threshold": 1,
                                    "unit_discount_price": null,
                                    "unit_origin_price": 5.9
                                }
                            ]
                        },
                        "category_code": "8GEE4O",
                        "category_label": "Pulseras de Actividad",
                        "channels": [
                            "WEB_ES",
                            "UNILAE_ES"
                        ],
                        "currency_iso_code": "EUR",
                        "description": null,
                        "discount": null,
                        "fulfillment": {
                            "center": {
                                "code": "DEFAULT"
                            }
                        },
                        "inactivity_reasons": [
                            "ZERO_QUANTITY"
                        ],
                        "internal_description": "14927",
                        "leadtime_to_ship": 1,
                        "logistic_class": {
                            "code": "medio",
                            "label": "Medio"
                        },
                        "min_shipping_price": 0,
                        "min_shipping_price_additional": 0,
                        "min_shipping_type": "express",
                        "min_shipping_zone": "espana-peninsular",
                        "offer_additional_fields": [
                            {
                                "code": "canon",
                                "type": "NUMERIC",
                                "value": "0"
                            },
                            {
                                "code": "tipo-iva",
                                "type": "NUMERIC",
                                "value": "21"
                            }
                        ],
                        "offer_id": 47946960,
                        "price": 5.9,
                        "price_additional_info": null,
                        "product_references": [
                            {
                                "reference": "MYD4089TY",
                                "reference_type": "MPN"
                            },
                            {
                                "reference": "6954176831309",
                                "reference_type": "EAN"
                            }
                        ],
                        "product_sku": "169527",
                        "product_title": "Xiaomi Mi Band 2 Cable de Carga",
                        "quantity": 0,
                        "shipping_deadline": "2022-04-26T15:27:52.779Z",
                        "shop_sku": "14715",
                        "state_code": "11",
                        "total_price": 5.9
                    },
                    {
                        "active": true,
                        "all_prices": [
                            {
                                "channel_code": null,
                                "discount_end_date": null,
                                "discount_start_date": null,
                                "price": 5.9,
                                "unit_discount_price": null,
                                "unit_origin_price": 5.9,
                                "volume_prices": [
                                    {
                                        "price": 5.9,
                                        "quantity_threshold": 1,
                                        "unit_discount_price": null,
                                        "unit_origin_price": 5.9
                                    }
                                ]
                            }
                        ],
                        "allow_quote_requests": false,
                        "applicable_pricing": {
                            "channel_code": null,
                            "discount_end_date": null,
                            "discount_start_date": null,
                            "price": 5.9,
                            "unit_discount_price": null,
                            "unit_origin_price": 5.9,
                            "volume_prices": [
                                {
                                    "price": 5.9,
                                    "quantity_threshold": 1,
                                    "unit_discount_price": null,
                                    "unit_origin_price": 5.9
                                }
                            ]
                        },
                        "category_code": "8U9UI3",
                        "category_label": "Cables HDMI",
                        "channels": [
                            "WEB_ES",
                            "UNILAE_ES"
                        ],
                        "currency_iso_code": "EUR",
                        "description": null,
                        "discount": null,
                        "fulfillment": {
                            "center": {
                                "code": "DEFAULT"
                            }
                        },
                        "inactivity_reasons": [],
                        "internal_description": "AV0010E",
                        "leadtime_to_ship": 1,
                        "logistic_class": {
                            "code": "medio",
                            "label": "Medio"
                        },
                        "min_shipping_price": 0,
                        "min_shipping_price_additional": 0,
                        "min_shipping_type": "express",
                        "min_shipping_zone": "espana-peninsular",
                        "offer_additional_fields": [
                            {
                                "code": "canon",
                                "type": "NUMERIC",
                                "value": "0"
                            },
                            {
                                "code": "tipo-iva",
                                "type": "NUMERIC",
                                "value": "21"
                            }
                        ],
                        "offer_id": 47946983,
                        "price": 5.9,
                        "price_additional_info": null,
                        "product_references": [
                            {
                                "reference": "AV0010C",
                                "reference_type": "MPN"
                            },
                            {
                                "reference": "8434128002653",
                                "reference_type": "EAN"
                            }
                        ],
                        "product_sku": "307044",
                        "product_title": "Axil Cable HDMI 1.4 Macho/Macho 1m",
                        "quantity": 8,
                        "shipping_deadline": "2022-04-26T15:27:52.781Z",
                        "shop_sku": "AV0010C",
                        "state_code": "11",
                        "total_price": 5.9
                    },
                    {
                        "active": true,
                        "all_prices": [
                            {
                                "channel_code": null,
                                "discount_end_date": null,
                                "discount_start_date": null,
                                "price": 6,
                                "unit_discount_price": null,
                                "unit_origin_price": 6,
                                "volume_prices": [
                                    {
                                        "price": 6,
                                        "quantity_threshold": 1,
                                        "unit_discount_price": null,
                                        "unit_origin_price": 6
                                    }
                                ]
                            }
                        ],
                        "allow_quote_requests": false,
                        "applicable_pricing": {
                            "channel_code": null,
                            "discount_end_date": null,
                            "discount_start_date": null,
                            "price": 6,
                            "unit_discount_price": null,
                            "unit_origin_price": 6,
                            "volume_prices": [
                                {
                                    "price": 6,
                                    "quantity_threshold": 1,
                                    "unit_discount_price": null,
                                    "unit_origin_price": 6
                                }
                            ]
                        },
                        "category_code": "8J0QFB",
                        "category_label": "Cables",
                        "channels": [
                            "WEB_ES",
                            "UNILAE_ES"
                        ],
                        "currency_iso_code": "EUR",
                        "description": null,
                        "discount": null,
                        "fulfillment": {
                            "center": {
                                "code": "DEFAULT"
                            }
                        },
                        "inactivity_reasons": [],
                        "internal_description": "AV0478C",
                        "leadtime_to_ship": 1,
                        "logistic_class": {
                            "code": "medio",
                            "label": "Medio"
                        },
                        "min_shipping_price": 0,
                        "min_shipping_price_additional": 0,
                        "min_shipping_type": "express",
                        "min_shipping_zone": "espana-peninsular",
                        "offer_additional_fields": [
                            {
                                "code": "canon",
                                "type": "NUMERIC",
                                "value": "0"
                            },
                            {
                                "code": "tipo-iva",
                                "type": "NUMERIC",
                                "value": "21"
                            }
                        ],
                        "offer_id": 47946991,
                        "price": 6,
                        "price_additional_info": null,
                        "product_references": [
                            {
                                "reference": "AV0476C",
                                "reference_type": "MPN"
                            },
                            {
                                "reference": "8434128002769",
                                "reference_type": "EAN"
                            }
                        ],
                        "product_sku": "382739",
                        "product_title": "Axil AV0476C Cable USB 2.0 a Micro USB 1m Negro",
                        "quantity": 10,
                        "shipping_deadline": "2022-04-26T15:27:52.782Z",
                        "shop_sku": "AV0476C",
                        "state_code": "11",
                        "total_price": 6
                    },
                    {
                        "active": true,
                        "all_prices": [
                            {
                                "channel_code": null,
                                "discount_end_date": null,
                                "discount_start_date": null,
                                "price": 6,
                                "unit_discount_price": null,
                                "unit_origin_price": 6,
                                "volume_prices": [
                                    {
                                        "price": 6,
                                        "quantity_threshold": 1,
                                        "unit_discount_price": null,
                                        "unit_origin_price": 6
                                    }
                                ]
                            }
                        ],
                        "allow_quote_requests": false,
                        "applicable_pricing": {
                            "channel_code": null,
                            "discount_end_date": null,
                            "discount_start_date": null,
                            "price": 6,
                            "unit_discount_price": null,
                            "unit_origin_price": 6,
                            "volume_prices": [
                                {
                                    "price": 6,
                                    "quantity_threshold": 1,
                                    "unit_discount_price": null,
                                    "unit_origin_price": 6
                                }
                            ]
                        },
                        "category_code": "8J0QFB",
                        "category_label": "Cables",
                        "channels": [
                            "WEB_ES",
                            "UNILAE_ES"
                        ],
                        "currency_iso_code": "EUR",
                        "description": null,
                        "discount": null,
                        "fulfillment": {
                            "center": {
                                "code": "DEFAULT"
                            }
                        },
                        "inactivity_reasons": [],
                        "internal_description": "AV0814E",
                        "leadtime_to_ship": 1,
                        "logistic_class": {
                            "code": "medio",
                            "label": "Medio"
                        },
                        "min_shipping_price": 0,
                        "min_shipping_price_additional": 0,
                        "min_shipping_type": "express",
                        "min_shipping_zone": "espana-peninsular",
                        "offer_additional_fields": [
                            {
                                "code": "canon",
                                "type": "NUMERIC",
                                "value": "0"
                            },
                            {
                                "code": "tipo-iva",
                                "type": "NUMERIC",
                                "value": "21"
                            }
                        ],
                        "offer_id": 47946992,
                        "price": 6,
                        "price_additional_info": null,
                        "product_references": [
                            {
                                "reference": "AV0477C",
                                "reference_type": "MPN"
                            },
                            {
                                "reference": "8434128002776",
                                "reference_type": "EAN"
                            }
                        ],
                        "product_sku": "382741",
                        "product_title": "Axil Cable USB a USB-C 1m Negro",
                        "quantity": 24,
                        "shipping_deadline": "2022-04-26T15:27:52.783Z",
                        "shop_sku": "AV0477C",
                        "state_code": "11",
                        "total_price": 6
                    },
                    {
                        "active": true,
                        "all_prices": [
                            {
                                "channel_code": null,
                                "discount_end_date": null,
                                "discount_start_date": null,
                                "price": 6,
                                "unit_discount_price": null,
                                "unit_origin_price": 6,
                                "volume_prices": [
                                    {
                                        "price": 6,
                                        "quantity_threshold": 1,
                                        "unit_discount_price": null,
                                        "unit_origin_price": 6
                                    }
                                ]
                            }
                        ],
                        "allow_quote_requests": false,
                        "applicable_pricing": {
                            "channel_code": null,
                            "discount_end_date": null,
                            "discount_start_date": null,
                            "price": 6,
                            "unit_discount_price": null,
                            "unit_origin_price": 6,
                            "volume_prices": [
                                {
                                    "price": 6,
                                    "quantity_threshold": 1,
                                    "unit_discount_price": null,
                                    "unit_origin_price": 6
                                }
                            ]
                        },
                        "category_code": "8J0QFB",
                        "category_label": "Cables",
                        "channels": [
                            "WEB_ES",
                            "UNILAE_ES"
                        ],
                        "currency_iso_code": "EUR",
                        "description": null,
                        "discount": null,
                        "fulfillment": {
                            "center": {
                                "code": "DEFAULT"
                            }
                        },
                        "inactivity_reasons": [],
                        "internal_description": "AV0822E",
                        "leadtime_to_ship": 1,
                        "logistic_class": {
                            "code": "medio",
                            "label": "Medio"
                        },
                        "min_shipping_price": 0,
                        "min_shipping_price_additional": 0,
                        "min_shipping_type": "express",
                        "min_shipping_zone": "espana-peninsular",
                        "offer_additional_fields": [
                            {
                                "code": "canon",
                                "type": "NUMERIC",
                                "value": "0"
                            },
                            {
                                "code": "tipo-iva",
                                "type": "NUMERIC",
                                "value": "21"
                            }
                        ],
                        "offer_id": 47946993,
                        "price": 6,
                        "price_additional_info": null,
                        "product_references": [
                            {
                                "reference": "AV0478C",
                                "reference_type": "MPN"
                            },
                            {
                                "reference": "8434128002783",
                                "reference_type": "EAN"
                            }
                        ],
                        "product_sku": "382743",
                        "product_title": "Axil Cable USB a Lightning 1m Blanco",
                        "quantity": 6,
                        "shipping_deadline": "2022-04-26T15:27:52.785Z",
                        "shop_sku": "AV0478C",
                        "state_code": "11",
                        "total_price": 6
                    }
                ],
                "total_count": 5
            };
            await sleep(3000);
            res(products);
        } catch (e) {
            rej(e);
        }
    });
};
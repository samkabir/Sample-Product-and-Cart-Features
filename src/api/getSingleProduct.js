import axios from 'axios';

export const getSingleProduct = async (productSlug) => {
  try {
    const { data } = await axios.get(`http://157.230.240.97:9999/api/v1/product/${productSlug}`);
    return {
      success: true,
      data: data,
    };
  } catch (err) {
    return { success: false, message: err?.response?.data?.message || 'Unknown error' };
  }
};


/**
 * 
 * {
    "message": "show product details",
    "data": {
        "id": 4,
        "name": "iPhone 15 Plus",
        "category_id": 5,
        "sku": "sku-24utTnmyjW",
        "barcode": "983202160460",
        "product_type_id": 2,
        "sub_category_id": null,
        "sub_category_child_id": null,
        "brand_id": 1,
        "slug": "iphone-15-plus",
        "description": "Sunt voluptate repud.",
        "merchant_id": 3,
        "total_stock_qty": 300,
        "image": {
            "1": {
                "url": "http:\/\/157.230.240.97:8888\/storage\/media\/20250625_191645_10ff0555-d6ac-4e69-b449-6b337129e767.jpg"
            }
        },
        "is_variant": true,
        "thumbnail": "http:\/\/157.230.240.97:8888\/storage\/media\/20250625_191645_5acbfcac-03dc-46d2-bf3a-fe83845b28d3.jpg",
        "rating_avg": 0,
        "rating_count": 0,
        "product_detail": {
            "id": 4,
            "product_id": 4,
            "regular_price": "110000.00",
            "discount_price": "105000.00"
        },
        "variations": [
            {
                "id": 1,
                "product_id": 4,
                "sku": "4JN6J",
                "barcode": "548032407950",
                "purchase_price": "100000.00",
                "regular_price": "110000.00",
                "discount_price": "105000.00",
                "e_price": "110000.00",
                "e_discount_price": "105000.00",
                "wholesale_price": "0.00",
                "minimum_qty": 0,
                "total_stock_qty": 50,
                "status": 1,
                "id_delivery_fee": "60.00",
                "od_delivery_fee": "120.00",
                "ed_delivery_fee": "150.00",
                "created_at": "2025-06-25T12:50:35.000000Z",
                "updated_at": "2025-06-25T12:52:38.000000Z",
                "image": "http:\/\/157.230.240.97:8888\/storage\/media\/20250625_191610_8408d9d2-d647-4c43-8e47-9de462039ae2.jpg",
                "variation_attributes": [
                    {
                        "id": 1,
                        "attribute_option_id": 67,
                        "product_variation_id": 1,
                        "product_id": 4,
                        "attribute_id": 11,
                        "created_at": "2025-06-25T12:50:35.000000Z",
                        "updated_at": "2025-06-25T12:50:35.000000Z",
                        "attribute": {
                            "id": 11,
                            "name": "Ram",
                            "merchant_id": 3,
                            "slug": "ram",
                            "status": "1",
                            "added_by": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        "attribute_option": {
                            "id": 67,
                            "merchant_id": 3,
                            "attribute_id": 11,
                            "attribute_value": "8GB",
                            "slug": "8gb",
                            "status": "1",
                            "added_by": 3,
                            "created_at": "2025-06-25T12:34:05.000000Z",
                            "updated_at": "2025-06-25T12:34:05.000000Z"
                        }
                    },
                    {
                        "id": 2,
                        "attribute_option_id": 52,
                        "product_variation_id": 1,
                        "product_id": 4,
                        "attribute_id": 9,
                        "created_at": "2025-06-25T12:50:35.000000Z",
                        "updated_at": "2025-06-25T12:50:35.000000Z",
                        "attribute": {
                            "id": 9,
                            "name": "Color",
                            "merchant_id": 3,
                            "slug": "color",
                            "status": "1",
                            "added_by": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        "attribute_option": {
                            "id": 52,
                            "merchant_id": 3,
                            "attribute_id": 9,
                            "attribute_value": "Blue",
                            "slug": "blue",
                            "status": "1",
                            "added_by": 3,
                            "created_at": "2025-06-25T12:34:05.000000Z",
                            "updated_at": "2025-06-25T12:34:05.000000Z"
                        }
                    }
                ]
            },
            {
                "id": 2,
                "product_id": 4,
                "sku": "V3QDL",
                "barcode": "793462567924",
                "purchase_price": "100000.00",
                "regular_price": "111000.00",
                "discount_price": "106000.00",
                "e_price": "111000.00",
                "e_discount_price": "106000.00",
                "wholesale_price": "0.00",
                "minimum_qty": 0,
                "total_stock_qty": 50,
                "status": 1,
                "id_delivery_fee": "60.00",
                "od_delivery_fee": "120.00",
                "ed_delivery_fee": "150.00",
                "created_at": "2025-06-25T12:50:35.000000Z",
                "updated_at": "2025-06-25T12:52:38.000000Z",
                "image": "http:\/\/157.230.240.97:8888\/storage\/media\/20250625_191707_b3f2bd02-776d-4a7a-87c7-67cfa3ac1394.jpg",
                "variation_attributes": [
                    {
                        "id": 3,
                        "attribute_option_id": 67,
                        "product_variation_id": 2,
                        "product_id": 4,
                        "attribute_id": 11,
                        "created_at": "2025-06-25T12:50:35.000000Z",
                        "updated_at": "2025-06-25T12:50:35.000000Z",
                        "attribute": {
                            "id": 11,
                            "name": "Ram",
                            "merchant_id": 3,
                            "slug": "ram",
                            "status": "1",
                            "added_by": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        "attribute_option": {
                            "id": 67,
                            "merchant_id": 3,
                            "attribute_id": 11,
                            "attribute_value": "8GB",
                            "slug": "8gb",
                            "status": "1",
                            "added_by": 3,
                            "created_at": "2025-06-25T12:34:05.000000Z",
                            "updated_at": "2025-06-25T12:34:05.000000Z"
                        }
                    },
                    {
                        "id": 4,
                        "attribute_option_id": 53,
                        "product_variation_id": 2,
                        "product_id": 4,
                        "attribute_id": 9,
                        "created_at": "2025-06-25T12:50:35.000000Z",
                        "updated_at": "2025-06-25T12:50:35.000000Z",
                        "attribute": {
                            "id": 9,
                            "name": "Color",
                            "merchant_id": 3,
                            "slug": "color",
                            "status": "1",
                            "added_by": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        "attribute_option": {
                            "id": 53,
                            "merchant_id": 3,
                            "attribute_id": 9,
                            "attribute_value": "Green",
                            "slug": "green",
                            "status": "1",
                            "added_by": 3,
                            "created_at": "2025-06-25T12:34:05.000000Z",
                            "updated_at": "2025-06-25T12:34:05.000000Z"
                        }
                    }
                ]
            },
            {
                "id": 3,
                "product_id": 4,
                "sku": "WEQBC",
                "barcode": "451031856951",
                "purchase_price": "100000.00",
                "regular_price": "112000.00",
                "discount_price": "107000.00",
                "e_price": "112000.00",
                "e_discount_price": "107000.00",
                "wholesale_price": "0.00",
                "minimum_qty": 0,
                "total_stock_qty": 50,
                "status": 1,
                "id_delivery_fee": "60.00",
                "od_delivery_fee": "120.00",
                "ed_delivery_fee": "150.00",
                "created_at": "2025-06-25T12:50:35.000000Z",
                "updated_at": "2025-06-25T12:52:38.000000Z",
                "image": "http:\/\/157.230.240.97:8888\/storage\/media\/20250625_191707_2f5709a7-5d15-4f2f-9cce-f34bf4f05c76.jpg",
                "variation_attributes": [
                    {
                        "id": 5,
                        "attribute_option_id": 67,
                        "product_variation_id": 3,
                        "product_id": 4,
                        "attribute_id": 11,
                        "created_at": "2025-06-25T12:50:35.000000Z",
                        "updated_at": "2025-06-25T12:50:35.000000Z",
                        "attribute": {
                            "id": 11,
                            "name": "Ram",
                            "merchant_id": 3,
                            "slug": "ram",
                            "status": "1",
                            "added_by": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        "attribute_option": {
                            "id": 67,
                            "merchant_id": 3,
                            "attribute_id": 11,
                            "attribute_value": "8GB",
                            "slug": "8gb",
                            "status": "1",
                            "added_by": 3,
                            "created_at": "2025-06-25T12:34:05.000000Z",
                            "updated_at": "2025-06-25T12:34:05.000000Z"
                        }
                    },
                    {
                        "id": 6,
                        "attribute_option_id": 54,
                        "product_variation_id": 3,
                        "product_id": 4,
                        "attribute_id": 9,
                        "created_at": "2025-06-25T12:50:35.000000Z",
                        "updated_at": "2025-06-25T12:50:35.000000Z",
                        "attribute": {
                            "id": 9,
                            "name": "Color",
                            "merchant_id": 3,
                            "slug": "color",
                            "status": "1",
                            "added_by": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        "attribute_option": {
                            "id": 54,
                            "merchant_id": 3,
                            "attribute_id": 9,
                            "attribute_value": "Black",
                            "slug": "black",
                            "status": "1",
                            "added_by": 3,
                            "created_at": "2025-06-25T12:34:05.000000Z",
                            "updated_at": "2025-06-25T12:34:05.000000Z"
                        }
                    }
                ]
            },
            {
                "id": 4,
                "product_id": 4,
                "sku": "90CWB",
                "barcode": "283834290417",
                "purchase_price": "100000.00",
                "regular_price": "115000.00",
                "discount_price": "110000.00",
                "e_price": "115000.00",
                "e_discount_price": "110000.00",
                "wholesale_price": "0.00",
                "minimum_qty": 0,
                "total_stock_qty": 50,
                "status": 1,
                "id_delivery_fee": "60.00",
                "od_delivery_fee": "120.00",
                "ed_delivery_fee": "150.00",
                "created_at": "2025-06-25T12:50:35.000000Z",
                "updated_at": "2025-06-25T12:52:38.000000Z",
                "image": "http:\/\/157.230.240.97:8888\/storage\/media\/20250625_191707_c18c5e11-fbc2-4422-a0f8-c0fa63e3b20d.jpg",
                "variation_attributes": [
                    {
                        "id": 7,
                        "attribute_option_id": 68,
                        "product_variation_id": 4,
                        "product_id": 4,
                        "attribute_id": 11,
                        "created_at": "2025-06-25T12:50:35.000000Z",
                        "updated_at": "2025-06-25T12:50:35.000000Z",
                        "attribute": {
                            "id": 11,
                            "name": "Ram",
                            "merchant_id": 3,
                            "slug": "ram",
                            "status": "1",
                            "added_by": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        "attribute_option": {
                            "id": 68,
                            "merchant_id": 3,
                            "attribute_id": 11,
                            "attribute_value": "16GB",
                            "slug": "16gb",
                            "status": "1",
                            "added_by": 3,
                            "created_at": "2025-06-25T12:34:05.000000Z",
                            "updated_at": "2025-06-25T12:34:05.000000Z"
                        }
                    },
                    {
                        "id": 8,
                        "attribute_option_id": 52,
                        "product_variation_id": 4,
                        "product_id": 4,
                        "attribute_id": 9,
                        "created_at": "2025-06-25T12:50:35.000000Z",
                        "updated_at": "2025-06-25T12:50:35.000000Z",
                        "attribute": {
                            "id": 9,
                            "name": "Color",
                            "merchant_id": 3,
                            "slug": "color",
                            "status": "1",
                            "added_by": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        "attribute_option": {
                            "id": 52,
                            "merchant_id": 3,
                            "attribute_id": 9,
                            "attribute_value": "Blue",
                            "slug": "blue",
                            "status": "1",
                            "added_by": 3,
                            "created_at": "2025-06-25T12:34:05.000000Z",
                            "updated_at": "2025-06-25T12:34:05.000000Z"
                        }
                    }
                ]
            },
            {
                "id": 5,
                "product_id": 4,
                "sku": "BEI3L",
                "barcode": "412656907574",
                "purchase_price": "100000.00",
                "regular_price": "115000.00",
                "discount_price": "114000.00",
                "e_price": "115000.00",
                "e_discount_price": "114000.00",
                "wholesale_price": "0.00",
                "minimum_qty": 0,
                "total_stock_qty": 50,
                "status": 1,
                "id_delivery_fee": "60.00",
                "od_delivery_fee": "120.00",
                "ed_delivery_fee": "150.00",
                "created_at": "2025-06-25T12:50:35.000000Z",
                "updated_at": "2025-06-25T12:52:38.000000Z",
                "image": "http:\/\/157.230.240.97:8888\/storage\/media\/20250625_191707_58defe74-87b0-4404-87a8-b024ea057d25.jpg",
                "variation_attributes": [
                    {
                        "id": 9,
                        "attribute_option_id": 68,
                        "product_variation_id": 5,
                        "product_id": 4,
                        "attribute_id": 11,
                        "created_at": "2025-06-25T12:50:36.000000Z",
                        "updated_at": "2025-06-25T12:50:36.000000Z",
                        "attribute": {
                            "id": 11,
                            "name": "Ram",
                            "merchant_id": 3,
                            "slug": "ram",
                            "status": "1",
                            "added_by": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        "attribute_option": {
                            "id": 68,
                            "merchant_id": 3,
                            "attribute_id": 11,
                            "attribute_value": "16GB",
                            "slug": "16gb",
                            "status": "1",
                            "added_by": 3,
                            "created_at": "2025-06-25T12:34:05.000000Z",
                            "updated_at": "2025-06-25T12:34:05.000000Z"
                        }
                    },
                    {
                        "id": 10,
                        "attribute_option_id": 53,
                        "product_variation_id": 5,
                        "product_id": 4,
                        "attribute_id": 9,
                        "created_at": "2025-06-25T12:50:36.000000Z",
                        "updated_at": "2025-06-25T12:50:36.000000Z",
                        "attribute": {
                            "id": 9,
                            "name": "Color",
                            "merchant_id": 3,
                            "slug": "color",
                            "status": "1",
                            "added_by": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        "attribute_option": {
                            "id": 53,
                            "merchant_id": 3,
                            "attribute_id": 9,
                            "attribute_value": "Green",
                            "slug": "green",
                            "status": "1",
                            "added_by": 3,
                            "created_at": "2025-06-25T12:34:05.000000Z",
                            "updated_at": "2025-06-25T12:34:05.000000Z"
                        }
                    }
                ]
            },
            {
                "id": 6,
                "product_id": 4,
                "sku": "Y56VD",
                "barcode": "724598417994",
                "purchase_price": "100000.00",
                "regular_price": "115000.00",
                "discount_price": "113000.00",
                "e_price": "115000.00",
                "e_discount_price": "113000.00",
                "wholesale_price": "0.00",
                "minimum_qty": 0,
                "total_stock_qty": 50,
                "status": 1,
                "id_delivery_fee": "60.00",
                "od_delivery_fee": "120.00",
                "ed_delivery_fee": "150.00",
                "created_at": "2025-06-25T12:50:36.000000Z",
                "updated_at": "2025-06-25T12:52:38.000000Z",
                "image": "http:\/\/157.230.240.97:8888\/storage\/media\/20250625_191707_9dbdc006-dd6c-4e61-a189-36ea169dfb58.jpg",
                "variation_attributes": [
                    {
                        "id": 11,
                        "attribute_option_id": 68,
                        "product_variation_id": 6,
                        "product_id": 4,
                        "attribute_id": 11,
                        "created_at": "2025-06-25T12:50:36.000000Z",
                        "updated_at": "2025-06-25T12:50:36.000000Z",
                        "attribute": {
                            "id": 11,
                            "name": "Ram",
                            "merchant_id": 3,
                            "slug": "ram",
                            "status": "1",
                            "added_by": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        "attribute_option": {
                            "id": 68,
                            "merchant_id": 3,
                            "attribute_id": 11,
                            "attribute_value": "16GB",
                            "slug": "16gb",
                            "status": "1",
                            "added_by": 3,
                            "created_at": "2025-06-25T12:34:05.000000Z",
                            "updated_at": "2025-06-25T12:34:05.000000Z"
                        }
                    },
                    {
                        "id": 12,
                        "attribute_option_id": 54,
                        "product_variation_id": 6,
                        "product_id": 4,
                        "attribute_id": 9,
                        "created_at": "2025-06-25T12:50:36.000000Z",
                        "updated_at": "2025-06-25T12:50:36.000000Z",
                        "attribute": {
                            "id": 9,
                            "name": "Color",
                            "merchant_id": 3,
                            "slug": "color",
                            "status": "1",
                            "added_by": 3,
                            "created_at": null,
                            "updated_at": null
                        },
                        "attribute_option": {
                            "id": 54,
                            "merchant_id": 3,
                            "attribute_id": 9,
                            "attribute_value": "Black",
                            "slug": "black",
                            "status": "1",
                            "added_by": 3,
                            "created_at": "2025-06-25T12:34:05.000000Z",
                            "updated_at": "2025-06-25T12:34:05.000000Z"
                        }
                    }
                ]
            }
        ],
        "merchant": {
            "id": 3,
            "shop_name": "Packly Bangladesh"
        },
        "brand": {
            "id": 1,
            "merchant_id": null,
            "name": "Apple",
            "slug": "apple",
            "status": "1",
            "created_at": "2025-06-25T12:35:32.000000Z",
            "updated_at": "2025-06-25T12:35:32.000000Z",
            "image": "http:\/\/157.230.240.97:9999\/storage\/media\/20250625_183532_a6e7be34-05b3-4767-a7a5-43c78ef9236c.png",
            "media": [
                {
                    "id": 1,
                    "model_type": "App\\Models\\Brand",
                    "model_id": 1,
                    "collection_name": "images",
                    "file_path": "media\/20250625_183532_a6e7be34-05b3-4767-a7a5-43c78ef9236c.png",
                    "file_type": "image\/png",
                    "tags": "",
                    "created_at": "2025-06-25T12:35:32.000000Z",
                    "updated_at": "2025-06-25T12:35:32.000000Z",
                    "full_url": "http:\/\/157.230.240.97:9999\/storage\/media\/20250625_183532_a6e7be34-05b3-4767-a7a5-43c78ef9236c.png"
                }
            ]
        },
        "shop_product": {
            "id": 1,
            "merchant_id": 3,
            "product_id": 4,
            "active_status": 1,
            "status": "2",
            "product_type": 2,
            "regular_price": null,
            "e_price": "110000.00",
            "e_discount_price": "105000.00",
            "packly_commission": "0.00",
            "id_delivery_fee": "60.00",
            "od_delivery_fee": "120.00",
            "ed_delivery_fee": "150.00",
            "created_at": "2025-06-25T12:52:38.000000Z",
            "updated_at": "2025-06-25T12:53:04.000000Z",
            "status_label": "Approved",
            "status_color": "alert-success"
        }
    },
    "_debug": {
        "summary": {
            "total_queries": 18,
            "total_time": "34.21ms",
            "memory_usage": "0 B",
            "peak_memory": "4 MB"
        },
        "query_analysis": {
            "types": {
                "select": 18,
                "insert": 0,
                "update": 0,
                "delete": 0,
                "other": 0
            },
            "tables": {
                "products": 1,
                "product_details": 1,
                "product_variations": 1,
                "variation_attributes": 1,
                "attributes": 1,
                "attribute_options": 1,
                "packly": 1,
                "brands": 1,
                "shop_products": 1,
                "media": 8,
                "reviews": 1
            },
            "slowest_query": {
                "sql": "select * from `media` where `media`.`model_type` = ? and `media`.`model_id` = ? and `media`.`model_id` is not null",
                "time": 0.74,
                "source": {
                    "file": "\/var\/www\/packly-admin-panel\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            "average_time": 0.56,
            "duplicate_queries": [
                {
                    "sql": "select * from `media` where `media`.`model_type` = ? and `media`.`model_id` = ? and `media`.`model_id` is not null",
                    "count": 8,
                    "locations": [
                        {
                            "file": "\/var\/www\/packly-admin-panel\/app\/Http\/Middleware\/ApiDebugbar.php",
                            "line": 39,
                            "method": "logQuery"
                        },
                        {
                            "file": "\/var\/www\/packly-admin-panel\/app\/Http\/Middleware\/ApiDebugbar.php",
                            "line": 39,
                            "method": "logQuery"
                        },
                        {
                            "file": "\/var\/www\/packly-admin-panel\/app\/Http\/Middleware\/ApiDebugbar.php",
                            "line": 39,
                            "method": "logQuery"
                        }
                    ]
                }
            ]
        },
        "queries": [
            {
                "sql": "SELECT `id`, `name`, `category_id`, `sku`, `barcode`, `product_type_id`, `category_id`, `sub_category_id`, `sub_category_child_id`, `brand_id`, `slug`, `description`, `merchant_id`, `total_stock_qty` FROM `products` WHERE `slug` = ? LIMIT 1",
                "bindings": [
                    "iphone-15-plus"
                ],
                "time": "0.67ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT `id`, `product_id`, `regular_price`, `discount_price` FROM `product_details` WHERE `product_details`.`product_id` in (4)",
                "bindings": [],
                "time": "0.48ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `product_variations` WHERE `product_variations`.`product_id` in (4)",
                "bindings": [],
                "time": "0.59ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `variation_attributes` WHERE `variation_attributes`.`product_variation_id` in (1, 2, 3, 4, 5, 6)",
                "bindings": [],
                "time": "0.61ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `attributes` WHERE `attributes`.`id` in (9, 11)",
                "bindings": [],
                "time": "0.44ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `attribute_options` WHERE `attribute_options`.`id` in (52, 53, 54, 67, 68)",
                "bindings": [],
                "time": "0.45ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT `id`, `shop_name` FROM `packly`.`merchants` WHERE `packly`.`merchants`.`id` in (3)",
                "bindings": [],
                "time": "0.39ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `brands` WHERE `brands`.`id` in (1)",
                "bindings": [],
                "time": "0.4ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `shop_products` WHERE `shop_products`.`product_id` in (4)",
                "bindings": [],
                "time": "0.49ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `media` WHERE `media`.`model_type` = ? and `media`.`model_id` = ? and `media`.`model_id` is not null",
                "bindings": [
                    "App\\Models\\Product",
                    4
                ],
                "time": "0.57ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `reviews` WHERE `reviews`.`product_id` = ? and `reviews`.`product_id` is not null",
                "bindings": [
                    4
                ],
                "time": "0.51ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `media` WHERE `media`.`model_type` = ? and `media`.`model_id` = ? and `media`.`model_id` is not null",
                "bindings": [
                    "App\\Models\\ProductVariation",
                    1
                ],
                "time": "0.66ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `media` WHERE `media`.`model_type` = ? and `media`.`model_id` = ? and `media`.`model_id` is not null",
                "bindings": [
                    "App\\Models\\ProductVariation",
                    2
                ],
                "time": "0.69ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `media` WHERE `media`.`model_type` = ? and `media`.`model_id` = ? and `media`.`model_id` is not null",
                "bindings": [
                    "App\\Models\\ProductVariation",
                    3
                ],
                "time": "0.59ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `media` WHERE `media`.`model_type` = ? and `media`.`model_id` = ? and `media`.`model_id` is not null",
                "bindings": [
                    "App\\Models\\ProductVariation",
                    4
                ],
                "time": "0.71ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `media` WHERE `media`.`model_type` = ? and `media`.`model_id` = ? and `media`.`model_id` is not null",
                "bindings": [
                    "App\\Models\\ProductVariation",
                    5
                ],
                "time": "0.74ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `media` WHERE `media`.`model_type` = ? and `media`.`model_id` = ? and `media`.`model_id` is not null",
                "bindings": [
                    "App\\Models\\ProductVariation",
                    6
                ],
                "time": "0.56ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `media` WHERE `media`.`model_type` = ? and `media`.`model_id` = ? and `media`.`model_id` is not null",
                "bindings": [
                    "App\\Models\\Brand",
                    1
                ],
                "time": "0.54ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            }
        ]
    }
}
 */
import axios from 'axios';

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`http://157.230.240.97:9999/api/v1/product/iphone-15-plus`);
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
    "message": "Shop products fetched successfully",
    "data": [
        {
            "id": 4,
            "name": "iPhone 15 Plus",
            "slug": "iphone-15-plus",
            "regular_price": "110000.00",
            "discount_price": "105000.00",
            "is_variant": true,
            "thumbnail": "http:\/\/157.230.240.97:8888\/storage\/media\/20250625_191645_5acbfcac-03dc-46d2-bf3a-fe83845b28d3.jpg",
            "rating_avg": 0,
            "rating_count": 0,
            "available_stock": 300,
            "badges": [
                {
                    "id": 1,
                    "name": "Free Shipping",
                    "type": 4,
                    "type_label": "Free Shipping"
                }
            ],
            "badgeProductVariationsExclude": []
        },
        {
            "id": 3,
            "name": "Portable Mini Rechargeable Fan 3200 mAh",
            "slug": "portable-mini-rechargeable-fan-3200-mah",
            "regular_price": "800.00",
            "discount_price": "600.00",
            "is_variant": false,
            "thumbnail": "http:\/\/157.230.240.97:8888\/storage\/media\/20250628_104744_7f56f255-8747-492f-a62f-15aa3b63a1f9.jpg",
            "rating_avg": 0,
            "rating_count": 0,
            "available_stock": 100,
            "badges": [],
            "badgeProductVariationsExclude": []
        },
        {
            "id": 2,
            "name": "Mr. Noodles Korean Super Spicy 8pcs",
            "slug": "mr-noodles-korean-super-spicy-8pcs",
            "regular_price": "300.00",
            "discount_price": "250.00",
            "is_variant": false,
            "thumbnail": "http:\/\/157.230.240.97:8888\/storage\/media\/20250628_114621_8c5bb431-da66-40cf-b5d1-f025e2c45dd1.jpg",
            "rating_avg": 0,
            "rating_count": 0,
            "available_stock": 100,
            "badges": [],
            "badgeProductVariationsExclude": []
        },
        {
            "id": 1,
            "name": "Awei Y333 Portable Bluetooth Speaker - Heavy Bass Stereo Sound Bar",
            "slug": "awei-y333-portable-bluetooth-speaker-heavy-bass-stereo-sound-bar",
            "regular_price": "3500.00",
            "discount_price": "3000.00",
            "is_variant": false,
            "thumbnail": "http:\/\/157.230.240.97:8888\/storage\/media\/20250628_114639_b9af38d4-d88f-4c43-948e-30447a7a2349.jpg",
            "rating_avg": 0,
            "rating_count": 0,
            "available_stock": 97,
            "badges": [],
            "badgeProductVariationsExclude": []
        },
        {
            "id": 5,
            "name": "iPhone 16 256GB",
            "slug": "iphone-16-256gb",
            "regular_price": "120000.00",
            "discount_price": "110000.00",
            "is_variant": false,
            "thumbnail": "http:\/\/157.230.240.97:8888\/storage\/media\/20250628_150245_c8c65ae4-93a8-406a-969e-7ae00a33b14d.jpg",
            "rating_avg": 0,
            "rating_count": 0,
            "available_stock": 10,
            "badges": [],
            "badgeProductVariationsExclude": []
        },
        {
            "id": 10,
            "name": "For Infinix GT 20 Pro",
            "slug": "for-infinix-gt-20-pro",
            "regular_price": "42000.00",
            "discount_price": "41500.00",
            "is_variant": true,
            "thumbnail": "http:\/\/157.230.240.97:8888\/storage\/media\/20250628_124750_db2b24f3-0e2a-4fa1-883d-15ccae7a200c.jpg",
            "rating_avg": 0,
            "rating_count": 0,
            "available_stock": 600,
            "badges": [],
            "badgeProductVariationsExclude": []
        },
        {
            "id": 9,
            "name": "BMW motorsports 12 rib auto open & close umbrella 100% waterproof",
            "slug": "bmw-motorsports-12-rib-auto-open-close-umbrella-100-waterproof",
            "regular_price": "700.00",
            "discount_price": "600.00",
            "is_variant": false,
            "thumbnail": "http:\/\/157.230.240.97:8888\/storage\/media\/20250628_124422_6a6d6dd6-5eaa-4a16-967b-8e6669c9a11b.png",
            "rating_avg": 0,
            "rating_count": 0,
            "available_stock": 100,
            "badges": [],
            "badgeProductVariationsExclude": []
        },
        {
            "id": 8,
            "name": "P9 Bluetooth Wireless Headphones With Microphone Noise Cancellation",
            "slug": "p9-bluetooth-wireless-headphones-with-microphone-noise-cancellation",
            "regular_price": "750.00",
            "discount_price": "525.00",
            "is_variant": false,
            "thumbnail": "http:\/\/157.230.240.97:8888\/storage\/media\/20250628_124247_13908182-4059-4cc1-9b15-2591733c1f0c.jpg",
            "rating_avg": 0,
            "rating_count": 0,
            "available_stock": 100,
            "badges": [
                {
                    "id": 1,
                    "name": "Free Shipping",
                    "type": 4,
                    "type_label": "Free Shipping"
                }
            ],
            "badgeProductVariationsExclude": []
        },
        {
            "id": 7,
            "name": "Hand Grip , Heavy gripper , Gym Grip",
            "slug": "hand-grip-heavy-gripper-gym-grip",
            "regular_price": "300.00",
            "discount_price": "150.00",
            "is_variant": false,
            "thumbnail": "http:\/\/157.230.240.97:8888\/storage\/media\/20250628_124147_9a3c3407-1ae2-4dd4-b82d-245475b74d41.jpg",
            "rating_avg": 0,
            "rating_count": 0,
            "available_stock": 100,
            "badges": [],
            "badgeProductVariationsExclude": []
        },
        {
            "id": 6,
            "name": "Vrbox Virtual Reality Glasses - Black and White",
            "slug": "vrbox-virtual-reality-glasses-black-and-white",
            "regular_price": "650.00",
            "discount_price": "475.00",
            "is_variant": false,
            "thumbnail": "http:\/\/157.230.240.97:8888\/storage\/media\/20250628_123829_5683983b-b5f5-4a55-bc85-2e1721ef34db.jpg",
            "rating_avg": 0,
            "rating_count": 0,
            "available_stock": 100,
            "badges": [],
            "badgeProductVariationsExclude": []
        }
    ],
    "total": 19,
    "last_page": 2,
    "current_page": 1,
    "next_page_url": "http:\/\/157.230.240.97:9999\/api\/v1\/shop\/products?page=2",
    "_debug": {
        "summary": {
            "total_queries": 8,
            "total_time": "23.3ms",
            "memory_usage": "0 B",
            "peak_memory": "8 MB"
        },
        "query_analysis": {
            "types": {
                "select": 8,
                "insert": 0,
                "update": 0,
                "delete": 0,
                "other": 0
            },
            "tables": {
                "products": 2,
                "product_details": 3,
                "shop_products": 3,
                "media": 1,
                "reviews": 1,
                "badges": 1,
                "badge_products": 2,
                "badge_product_variations": 1
            },
            "slowest_query": {
                "sql": "select `products`.* from `products` left join `product_details` on `products`.`id` = `product_details`.`product_id` where `products`.`status` = ? and `products`.`total_stock_qty` > ? and exists (select * from `shop_products` where `products`.`id` = `shop_products`.`product_id` and `status` = ? and `e_price` > ?) limit 10 offset 0",
                "time": 1.7,
                "source": {
                    "file": "\/var\/www\/packly-admin-panel\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            "average_time": 1.06,
            "duplicate_queries": []
        },
        "queries": [
            {
                "sql": "SELECT count(*) as aggregate FROM `products` LEFT JOIN `product_details` on `products`.`id` = `product_details`.`product_id` WHERE `products`.`status` = ? and `products`.`total_stock_qty` &gt; ? and exists (SELECT * FROM `shop_products` WHERE `products`.`id` = `shop_products`.`product_id` and `status` = ? and `e_price` &gt; ?)",
                "bindings": [
                    1,
                    0,
                    2,
                    0
                ],
                "time": "1.66ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT `products`.* FROM `products` LEFT JOIN `product_details` on `products`.`id` = `product_details`.`product_id` WHERE `products`.`status` = ? and `products`.`total_stock_qty` &gt; ? and exists (SELECT * FROM `shop_products` WHERE `products`.`id` = `shop_products`.`product_id` and `status` = ? and `e_price` &gt; ?) LIMIT 10 OFFSET 0",
                "bindings": [
                    1,
                    0,
                    2,
                    0
                ],
                "time": "1.7ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `media` WHERE `media`.`model_id` in (1, 2, 3, 4, 5, 6, 7, 8, 9, 10) and `media`.`model_type` = ?",
                "bindings": [
                    "App\\Models\\Product"
                ],
                "time": "1.17ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT * FROM `reviews` WHERE `reviews`.`product_id` in (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)",
                "bindings": [],
                "time": "0.75ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT `id`, `product_id`, `regular_price`, `discount_price`, `e_price`, `e_discount_price` FROM `product_details` WHERE `product_details`.`product_id` in (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)",
                "bindings": [],
                "time": "0.7ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT `badges`.*, `badge_products`.`product_id` as `pivot_product_id`, `badge_products`.`badge_id` as `pivot_badge_id` FROM `badges` INNER JOIN `badge_products` on `badges`.`id` = `badge_products`.`badge_id` WHERE `status` = ? and `badge_products`.`product_id` in (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)",
                "bindings": [
                    1
                ],
                "time": "1.19ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT `badge_product_variations`.*, `badge_products`.`product_id` as `laravel_through_key` FROM `badge_product_variations` INNER JOIN `badge_products` on `badge_products`.`id` = `badge_product_variations`.`badge_product_id` WHERE `badge_products`.`product_id` in (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)",
                "bindings": [],
                "time": "0.58ms",
                "source": {
                    "file": "\/app\/Http\/Middleware\/ApiDebugbar.php",
                    "line": 39,
                    "method": "logQuery"
                }
            },
            {
                "sql": "SELECT `id`, `product_id`, `merchant_id`, `e_price`, `e_discount_price` FROM `shop_products` WHERE `shop_products`.`product_id` in (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)",
                "bindings": [],
                "time": "0.71ms",
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
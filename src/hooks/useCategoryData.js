'use client';

import { useState, useEffect, useRef } from "react";
import { getCategory } from "@/api/getCategory";

const useCategoryData = () => {
    const [categories, setCategories] = useState([]);
    const fetchedOnce = useRef(false); // prevent re-fetching

    useEffect(() => {
        const fetchData = async () => {
            if (fetchedOnce.current) return;
            try {
                const response = await getCategory();
                if (response.success) {
                    setCategories(response.data.data);
                    fetchedOnce.current = true;
                } else {
                    console.log('Failed to fetch categories:', response.message);
                }
            } catch (error) {
                console.log('Error fetching categories:', error);
            }
        };

        fetchData();
    }, []);

    return categories;
};

export default useCategoryData;

CREATE TABLE IF NOT EXISTS product (
    prod_id INT PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
    prod_name VARCHAR(150) NOT NULL,
    prod_description TEXT NOT NULL,
    prod_brand VARCHAR(50) NOT NULL,
    prod_image TEXT NOT NULL,
    price INT NOT NULL,
    prod_category VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS review (
    review_id INT PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
    comment TEXT NOT NULL,
    rating INT NOT NULL,
    prod_id INT NOT NULL REFERENCES product,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
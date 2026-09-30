CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,                  -- auto-incrementing unique ID
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,        -- UNIQUE = no two users can share an email
    password_hash VARCHAR(255) NOT NULL,       -- scrambled password, not plain text
    phone VARCHAR(30),
        role VARCHAR(20) NOT NULL DEFAULT 'CUSTOMER'
        CHECK (role IN ('CUSTOMER', 'ADMIN')), -- CHECK = only these 2 values allowed
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE services (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    category VARCHAR(100) NOT NULL,        -- e.g. Printing, Branding, Signage
    unit VARCHAR(50) NOT NULL,             -- e.g. per_piece, per_sqft, per_100_pieces
    base_price NUMERIC(12,2) NOT NULL,     -- price per unit, 2 decimal places
    active BOOLEAN NOT NULL DEFAULT TRUE,  -- lets admin hide a service without deleting it
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP NOT NULL DEFAULT now()
);


CREATE TABLE orders (
    id BIGSERIAL PRIMARY KEY,
    customer_id BIGINT NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
    service_id BIGINT NOT NULL REFERENCES services(id) ON DELETE RESTRICT,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    specifications JSONB,                                    -- flexible extra info: size, paper_type, color, etc.
                                                             -- JSONB lets each order store different details
                                                             -- without needing a separate column for every possibility
    design_file_url VARCHAR(500),                            -- where the uploaded design file is stored
    quoted_price NUMERIC(12,2) NOT NULL,                     -- price locked in at order time
    status VARCHAR(20) NOT NULL DEFAULT 'PENDING'
        CHECK (status IN ('PENDING', 'PRINTING', 'READY', 'DELIVERED', 'CANCELLED')),
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP NOT NULL DEFAULT now()
);


CREATE TABLE payments (
    id BIGSERIAL PRIMARY KEY,
    order_id BIGINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    amount NUMERIC(12,2) NOT NULL,
    method VARCHAR(30) NOT NULL DEFAULT 'MOCK',
    status VARCHAR(20) NOT NULL DEFAULT 'PENDING'
        CHECK (status IN ('PENDING', 'SUCCESS', 'FAILED')),
    transaction_ref VARCHAR(100) UNIQUE,   -- a fake "transaction ID" for the mock payment
    paid_at TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE invoices (
    id BIGSERIAL PRIMARY KEY,
    order_id BIGINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    invoice_number VARCHAR(50) NOT NULL UNIQUE,
    amount NUMERIC(12,2) NOT NULL,
    issued_at TIMESTAMP NOT NULL DEFAULT now()
);

CREATE INDEX idx_orders_customer_id ON orders(customer_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_payments_order_id ON payments(order_id);
CREATE INDEX idx_invoices_order_id ON invoices(order_id);
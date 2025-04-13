const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || {
    user: 'postgres',
    password: 'yeshallbeasgods',
    host: 'localhost',
    port: 5432,
    database: 'lil_vintage_db',
});
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');
const JWT = process.env.JWT || 'shhh';

const createTables = async()=> {
    await client.query(`drop table if exists products`);
    await client.query(`drop table if exists gallery`);
    await client.query(`drop table if exists users`);
    await client.query(`create table users(
          id uuid primary key,
          profile_url text,
          email varchar(50) not null unique,
          password varchar(255) not null,
          is_admin boolean default false not null,
          created_at timestamp default now(),
          updated_at timestamp default now()
        )`);
    await client.query(`create table categories (
          id uuid primary key,
          title varchar(50)
        )`);
    await client.query(`create table products (
          id uuid primary key,
          name varchar(100) not null,
          price decimal(10, 2) not null,
          description text,
          category uuid references categories(id) not null,
          image_url text
        )`);
    await client.query(`create table gallery (
          id uuid primary key,
          title varchar(100),
          imagew_url text not null,
          category uuid references categories(id) not null
        )`);
};

module.exports = {
    client,
    createTables
}
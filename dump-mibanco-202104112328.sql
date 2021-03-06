PGDMP                         y            mibanco    13.2    13.2     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16394    mibanco    DATABASE     f   CREATE DATABASE mibanco WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE mibanco;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            ?           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            ?            1259    16411    accounts    TABLE     ?   CREATE TABLE public.accounts (
    id character varying NOT NULL,
    amount double precision NOT NULL,
    customerid character varying NOT NULL,
    openedat date NOT NULL
);
    DROP TABLE public.accounts;
       public         heap    postgres    false    3            ?            1259    16395 	   customers    TABLE     ?   CREATE TABLE public.customers (
    id character varying NOT NULL,
    name character varying,
    lastname character varying,
    email character varying
);
    DROP TABLE public.customers;
       public         heap    postgres    false    3            ?            1259    24600    transactions    TABLE     ?   CREATE TABLE public.transactions (
    number integer NOT NULL,
    acountid character varying NOT NULL,
    type character varying NOT NULL,
    amount double precision NOT NULL,
    date date NOT NULL
);
     DROP TABLE public.transactions;
       public         heap    postgres    false    3            ?            1259    24598    transactions_number_seq    SEQUENCE     ?   CREATE SEQUENCE public.transactions_number_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.transactions_number_seq;
       public          postgres    false    3    203            ?           0    0    transactions_number_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.transactions_number_seq OWNED BY public.transactions.number;
          public          postgres    false    202            -           2604    24603    transactions number    DEFAULT     z   ALTER TABLE ONLY public.transactions ALTER COLUMN number SET DEFAULT nextval('public.transactions_number_seq'::regclass);
 B   ALTER TABLE public.transactions ALTER COLUMN number DROP DEFAULT;
       public          postgres    false    203    202    203            ?          0    16411    accounts 
   TABLE DATA           D   COPY public.accounts (id, amount, customerid, openedat) FROM stdin;
    public          postgres    false    201            ?          0    16395 	   customers 
   TABLE DATA           >   COPY public.customers (id, name, lastname, email) FROM stdin;
    public          postgres    false    200            ?          0    24600    transactions 
   TABLE DATA           L   COPY public.transactions (number, acountid, type, amount, date) FROM stdin;
    public          postgres    false    203            ?           0    0    transactions_number_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.transactions_number_seq', 26, true);
          public          postgres    false    202            1           2606    16418    accounts accounts_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_pkey;
       public            postgres    false    201            /           2606    16402    customers customers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            postgres    false    200            3           2606    24608    transactions transactions_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (number);
 H   ALTER TABLE ONLY public.transactions DROP CONSTRAINT transactions_pkey;
       public            postgres    false    203            ?   O   x?e??	?0Cѳ???d'??t?9jZ
???A?????%kP;??X??o????????<?S???????3????      ?   ~   x?3??M?+M??8??(??? ?(?!713G/9???([???間_?Z̙?XT?????P`R KĭȔ3?4)5??)?'????b?"!o?钘?????????????ZtxsgVF>??=... 0;<?      ?   ?   x???K?0D??)?@??|Z?? ?dJA?P?ZV\?#p1B???????iƙA?`??
???{ a:+?e6??חxeS?Hlk?cUW??nQW??o??Z?K???{t??>?Y?v?t????arY$??? Q"&??C??
?n==50??????E??&??&^?,?ՠ8?)??"	?'??r??Gj?~???ך?{???%Y??&?n????	F?          ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16394    mibanco    DATABASE     f   CREATE DATABASE mibanco WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE mibanco;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            ?           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            ?            1259    16411    accounts    TABLE     ?   CREATE TABLE public.accounts (
    id character varying NOT NULL,
    amount double precision NOT NULL,
    customerid character varying NOT NULL,
    openedat date NOT NULL
);
    DROP TABLE public.accounts;
       public         heap    postgres    false    3            ?            1259    16395 	   customers    TABLE     ?   CREATE TABLE public.customers (
    id character varying NOT NULL,
    name character varying,
    lastname character varying,
    email character varying
);
    DROP TABLE public.customers;
       public         heap    postgres    false    3            ?            1259    24600    transactions    TABLE     ?   CREATE TABLE public.transactions (
    number integer NOT NULL,
    acountid character varying NOT NULL,
    type character varying NOT NULL,
    amount double precision NOT NULL,
    date date NOT NULL
);
     DROP TABLE public.transactions;
       public         heap    postgres    false    3            ?            1259    24598    transactions_number_seq    SEQUENCE     ?   CREATE SEQUENCE public.transactions_number_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.transactions_number_seq;
       public          postgres    false    3    203            ?           0    0    transactions_number_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.transactions_number_seq OWNED BY public.transactions.number;
          public          postgres    false    202            -           2604    24603    transactions number    DEFAULT     z   ALTER TABLE ONLY public.transactions ALTER COLUMN number SET DEFAULT nextval('public.transactions_number_seq'::regclass);
 B   ALTER TABLE public.transactions ALTER COLUMN number DROP DEFAULT;
       public          postgres    false    203    202    203            ?          0    16411    accounts 
   TABLE DATA           D   COPY public.accounts (id, amount, customerid, openedat) FROM stdin;
    public          postgres    false    201   `       ?          0    16395 	   customers 
   TABLE DATA           >   COPY public.customers (id, name, lastname, email) FROM stdin;
    public          postgres    false    200   Y        ?          0    24600    transactions 
   TABLE DATA           L   COPY public.transactions (number, acountid, type, amount, date) FROM stdin;
    public          postgres    false    203   ?        ?           0    0    transactions_number_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.transactions_number_seq', 26, true);
          public          postgres    false    202            1           2606    16418    accounts accounts_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_pkey;
       public            postgres    false    201            /           2606    16402    customers customers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            postgres    false    200            3           2606    24608    transactions transactions_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (number);
 H   ALTER TABLE ONLY public.transactions DROP CONSTRAINT transactions_pkey;
       public            postgres    false    203           
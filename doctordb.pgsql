--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: doctordb; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE doctordb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United Kingdom.1252';


ALTER DATABASE doctordb OWNER TO postgres;

\connect doctordb

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: doctors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doctors (
    id bigint NOT NULL,
    name character varying(50) NOT NULL,
    company character varying(50) NOT NULL,
    price_range integer NOT NULL,
    CONSTRAINT doctors_price_range_check CHECK (((price_range >= 1) AND (price_range <= 5)))
);


ALTER TABLE public.doctors OWNER TO postgres;

--
-- Name: doctors_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.doctors_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.doctors_id_seq OWNER TO postgres;

--
-- Name: doctors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.doctors_id_seq OWNED BY public.doctors.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reviews (
    id bigint NOT NULL,
    doctor_id bigint NOT NULL,
    name character varying(50) NOT NULL,
    review text NOT NULL,
    rating integer NOT NULL,
    CONSTRAINT reviews_rating_check CHECK (((rating >= 1) AND (rating <= 5)))
);


ALTER TABLE public.reviews OWNER TO postgres;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reviews_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reviews_id_seq OWNER TO postgres;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: doctors id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctors ALTER COLUMN id SET DEFAULT nextval('public.doctors_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Data for Name: doctors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.doctors (id, name, company, price_range) FROM stdin;
1	Hayden Stockton	Middlesex Welding Sales Co, Inc.	3
3	Nicky Gingedale	Matrixx Initiatives, Inc.	3
675	Helen-elizabeth Ghidelli	REMEDYREPACK INC.	5
714	Audi Tummondko	Physician Therapeutics LLC	5
680	Ashley Riddlesden	U.S. Pharmaceuticals	5
11	Stephine Colombier	COSTCO WHOLESALE CORPORATION	3
12	Meggy Megarry	Hikma Pharmaceutical	3
13	Vinni Boddy	MSD Consumer Care, Inc.	5
14	Jo-anne Delagnes	Alva-Amco Pharmacal Companies, Inc.	5
15	Sabra Dalyell	Laser Pharmaceuticals, LLC	5
16	Pattie Miall	Cardinal Health	4
17	Stafford Wormell	Sam's West Inc	3
20	Robers Pauls	Preferred Pharmaceuticals, Inc	2
21	Ralf Donaher	Cantrell Drug Company	1
22	Tammy Scarsbrooke	Ortho-McNeil-Janssen Pharmaceutical	1
684	Cicily Hutfield	NCS HealthCare of KY, Inc dba Vangard Labs	5
24	Warden Winterton	Mallinckrodt Inc.	5
686	Berty Kanwell	Dr. Reddy's Laboratories Limited	5
27	Karita Roke	Novartis Consumer Health, Inc.	5
28	Rafe Tucsell	Apotheca Company	3
687	Gifford Bilham	Kmart Corporation	3
688	Donnajean Izakof	BCM Cosmetique SAS	1
31	Joann Learned	Sanum Kehlbeck GmbH & Co. KG	4
32	Mike Abrahamoff	Pfizer Laboratories Div Pfizer Inc	1
33	Steffen Cammacke	Georgia-Pacific Consumer Products LP	4
34	Sonnie Valance	NDC National Distribution & Contracting, Inc.	3
35	Trudy Sellman	Cardinal Health	5
36	Wendye Kolodziejski	Unit Dose Services	1
689	Amil Tonn	Physicians Total Care, Inc.	4
38	Vivien Moresby	Dickey Consumer Products DBA DMD	3
40	Wendye Drover	Roxane Laboratories, Inc	1
42	Mariam Yeldham	Kinray LLC	1
43	Saraann Desseine	Sagent Pharmaceuticals	3
693	Demetri O Sullivan	White Manufacturing Incorporated DBA Micro-West	3
46	Sigismundo Stolting	RedPharm Drug Inc.	5
694	Arnuad O'Growgane	Rite Aid	2
49	Kenny Nias	BioActive Nutritional, Inc.	5
696	Friederike Klempke	Teva Pharmaceuticals USA Inc	5
52	Megen Rossin	McKesson Contract Packaging	4
53	Karry Yearne	CVS PHARMACY	2
699	Greg Minghella	Antigen Laboratories, Inc.	5
56	Renate Angliss	Actavis Elizabeth LLC	3
57	Tove Salomon	Lake Erie Medical DBA Quality Care Products LLC	2
700	Gill Libri	Guerlain S.A.	1
702	Daron Honeyghan	Clinical Solutions Wholesale	2
61	Sancho Crowder	CUARTA DIMENSION USA, INC.	3
703	Grethel Hastelow	REMEDYREPACK INC.	1
63	Malory Ebbetts	Equaline	1
705	Elaina Gomme	The Wellness Center	2
68	Thekla Ormshaw	L. Perrigo Company	2
69	Robert Duff	Teva Pharmaceuticals USA Inc	5
70	Spenser Ivakhnov	Qualitest Pharmaceuticals	4
71	Lynnea Cloonan	Allermed Laboratories, Inc.	3
73	Mareah Jakov	Nelco Laboratories, Inc.	4
74	Milissent Durbyn	Sanum Kehlbeck GmbH & Co. KG	2
708	Janifer Corser	Eon Labs, Inc.	2
76	Phillie Leversha	CHANEL PARFUMS BEAUTE	5
709	Delainey Leemans	Conopco Inc. d/b/a Unilever	4
78	Ricki Shutte	Alcon Laboratories, Inc.	4
711	Fraze Horley	Carlsbad Technology, Inc.	3
80	Philipa Houlton	Dukal Corporation	3
81	Tally Ferneley	The Mentholatum Company	5
82	Trent Jost	Terumo Corporation	1
713	Grove Etchell	Cantrell Drug Company	4
85	Salomon Elston	NorthStar RxLLC	2
715	Dion Crookston	Carilion Materials Management	2
717	Bethany Deguara	Actavis Pharma, Inc.	2
91	Reynard O'Mannion	ALK-Abello, Inc.	1
719	Aurea Klementz	Antigen Laboratories, Inc.	1
93	Packston Mollon	Unit Dose Services	1
720	Jacquelyn Doole	Norwood Packaging Ltd.	4
96	Joice Van der Kruys	Uriel Pharmacy Inc.	5
722	Dinny Newns	Wockhardt Limited	5
98	Renie Jerson	Jubilant HollisterStier LLC	4
100	Starr Siss	Cardinal Health	2
101	Randolph Ickovici	Procter & Gamble Manufacturing Company	5
1022	b	b	1
103	Reider Wray	Hospira, Inc.	2
104	Ringo Kiessel	Mallinckrodt, Inc.	1
107	Washington Bascomb	Deseret Biologicals, Inc.	1
416	Ezmeralda Blatherwick	Family Dollar (FAMILY WELLNESS)	1
418	Cletis Gallifont	Valeant Pharmaceuticals North America LLC	5
113	Rebekkah Richardes	Cardinal Health	3
421	Cordelie Gianettini	Crosstex International Inc.	5
116	Onfre Krebs	UCB, Inc.	5
117	Katharina Abry	Caraco Pharmaceutical Laboratories, Ltd.	3
118	Livvie Peagram	Northstar RxLLC	3
422	Del Petru	SiCap Industries LLC	5
425	Alastair Tomlinson	Amneal Pharmaceuticals of NY LLC	5
426	Fey Channing	CVS Pharmacy	2
427	Douglass McLaggan	American Health Packaging	1
125	My Coyne	Pfizer Laboratories Div Pfizer Inc.	2
127	Kip Elfitt	Five Below	2
128	Minnaminnie Langran	Hospira, Inc.	5
130	Kellia O'Halloran	Lights Medical Manufacture Co., Ltd.	2
429	Hurlee Brockhouse	Ranbaxy Pharmaceuticals Inc.	3
134	Madelin Corser	The Wellness Center for Research and Education	1
431	Franchot Richen	WALGREEN COMPANY	5
136	Travis Lassells	BioActive Nutritional, Inc.	4
432	Elsbeth McQuaide	Newton Laboratories, Inc.	1
138	Nicoline Glover	Daiichi Sankyo, Inc.	2
433	Eartha Langtry	Panrosa Enterprises, Inc.	3
140	Patsy Beamson	Stephen L. LaFrance Pharmacy, Inc.	2
142	Karlan Clacey	CHANEL PARFUMS BEAUTE	4
143	Winni Drohane	Advanced Generic Corporation	2
144	Veronica Newens	Forces of Nature	1
145	Rusty Hradsky	Rebel Distributors Corp	4
146	Michele McPeeters	Uriel Pharmacy Inc.	4
147	Joellyn Grigorey	Good Sense (Geiss, Destin & Dunn, Inc.)	2
149	Julie Mallaby	UNITED EXCHANGE CORP.	3
150	Jordana Trinke	Wal-Mart Stores, Inc	3
151	Sara-ann Kibard	Napoleon Perdis Cosmetics, Inc	2
152	Ryon Slipper	Colgate-Palmolive Company	3
437	Drugi Sogg	Sancilio & Company Inc	2
156	Jorgan Bredgeland	Sun Pharma Global FZE	5
438	Doe Paddle	Cardinal Health	2
158	Orland Rapo	Neutrogena Corporation	5
159	Wilt Dumbarton	Upsher-Smith Laboratories, Inc.	4
160	Pier Willcott	TOPCO ASSOCIATES LLC	4
161	Lowrance Badam	Conopco Inc. d/b/a Unilever	4
162	Paulie Milner	US EXCY-LINE INC.	3
439	Danya Vasilik	Avon Products, Inc.	2
440	Frederick Hitchens	Lake Erie Medical DBA Quality Care Products LLC	4
165	Willabella Hendrickson	Cardinal Health	3
166	Karleen Abrahamowitcz	Uriel Pharmacy Inc.	4
167	Lynnette Koeppke	Physicians Total Care, Inc.	2
444	Lucie Viant	Amerisource Bergen	5
445	Jerrome Baselli	Triad Group	5
172	Toby Vivyan	Allermed Laboratories, Inc.	5
446	Amory Gray	G&G Medical Products LLC	3
447	Bron Salvadore	Blenheim Pharmacal, Inc.	3
448	Goldarina Gerritzen	Crosstex International Inc.	2
181	Kippie Coleborn	Shopko Stores Operating Co., LLC.	5
183	Karee Del Castello	Walgreen Co.	2
458	Filia Sammons	Ventura Corporation (San Juan, P.R)	2
188	Stefano Chatwood	Salado Sales, Inc.	4
193	Kimbell Kellert	Clinical Solutions Wholesale	2
194	Rhonda Grogor	Rite Aid	2
195	Wilfrid Grindlay	Par Pharmaceutical, Inc.	2
196	Nickolas Bronot	Ranbaxy Laboratories Inc.	3
462	Gert Quested	Procter & Gamble Manufacturing Company	5
199	Kristel Gadesby	CONOPCO Inc. d/b/a Unilever	1
200	Wendeline Bulteel	Nelco Laboratories, Inc.	2
202	Sarene Dannehl	Greenstone LLC	5
203	Marya Roads	Herbalife International of America	5
2	Genevra Pavitt	BioActive Nutritional, Inc.	4
205	Whit Lidgertwood	Apotheca Company	5
206	Rockie Laurens	DIRECT RX	2
207	Nadiya Laurentino	Amgen Inc	1
208	Ray Eckley	Aidarex Pharmaceuticals LLC	2
209	Sigismund Byatt	TAYLOR JAMES, LTD.	2
210	Robbyn Kose	Rimmel Inc.	4
211	Nadine Cominotti	Mondelez Global LLC	3
212	Odey Pollett	Endo Pharmaceuticals Inc	4
466	Genvieve O'Luby	Physicians Total Care, Inc.	4
4	Care Graddon	Nelco Laboratories, Inc.	5
5	Amber Rolfs	Ojas Enterprises LLC	2
216	Magdaia Bedingfield	Geritrex Corp.	2
217	Paolo Ivashov	Blenheim Pharmacal, Inc.	3
467	Merla Kibblewhite	Ningbo Dowland Daily Health Co., Ltd	5
219	Verena Baake	Cardinal Health	2
220	Teddie Deguara	Mylan Pharmaceuticals Inc.	3
221	Marsh Payfoot	Clinical Solutions Wholesale	2
222	Ulrich Sturte	Waxie Sanitary Supply	5
223	Orion Crudginton	Apotex Corp	5
6	Germaine Boase	West-ward Pharmaceutical Corp	4
225	Marianne Callery	REMEDYREPACK INC.	2
7	Cybil Davidescu	Ohm Laboratories Inc.	4
227	Pebrook Dossantos	Apotex Corp	2
228	Laurie Bucklan	Antigen Laboratories, Inc.	1
229	Nicolette Cessford	Glenmark Generics Inc.,USA	4
9	Brant Scotchforth	Amerisource Bergen	1
10	Hunt Jeanel	STAT Rx USA LLC	3
468	Domingo Hoggin	Amneal Pharmaceuticals of New York, LLC	5
469	Xylina Keavy	VS Shinbi Co., Ltd.	3
1005	jkl	kln	4
237	Waylen Cleiment	Target Corporation	1
471	Ethelred Cowles	Baoying County Fukang Medical Appliance Co., Ltd.	4
472	Billie Franchyonok	Sanum Kehlbeck GmbH & Co. KG	4
473	Garald Weine	Just Play, LLC	3
474	Colene Greenstock	VIVUS, Inc.	1
18	Caddric Maciocia	Rij Pharmaceutical Corporation	3
244	Jo ann Krolle	Aphena Pharma Solutions - Tennessee, LLC	4
19	Dalis Tevelov	Sagent Pharmaceuticals	4
247	Shela Stuehmeyer	Physicians Total Care, Inc.	2
250	Kessia Attewill	Blenheim Pharmacal, Inc.	5
251	Marena Brownscombe	Bryant Ranch Prepack	3
252	Sindee Mowne	Valeant Pharmaceuticals North America	2
253	Justinian Timblett	Similasan Corporation	5
254	Kristo Stienton	Septodont, Inc.	5
255	Linoel Corkel	Hospira, Inc.	2
256	Renae Tiler	STAT Rx USA LLC	2
259	Toddie Atack	REMEDYREPACK INC.	1
260	Lorri Buncher	Uriel Pharmacy Inc.	2
261	Mella Kirtland	REMEDYREPACK INC.	3
23	Drusy Corain	DIRECT RX	4
264	Nicolina Goadsby	STAT Rx USA LLC	4
25	Alvina Elliss	Conopco Inc. d/b/a Unilever	4
26	Carl Renbold	NATURE REPUBLIC CO., LTD.	1
268	Venita Bierman	State of Florida DOH Central Pharmacy	5
270	Pauline Tramel	Merck Sharp & Dohme Corp.	2
30	Madeline Jeanel	Humanwell PuraCap Pharmaceutical (Wuhan), Ltd.	2
275	Lambert Monan	Aidarex Pharmaceuticals LLC	4
277	Nicolas Darleston	Henan Lingrui Pharmaceutical Co.; Ltd	2
280	Shae Teare	CVS Pharmacy	4
281	Stinky Isaksen	Mylan Pharmaceuticals Inc.	2
284	Kandy Threlfall	Baxter Healthcare Corporation	1
285	Trevar Elves	Bracco Diagnostics Inc.	2
37	Heriberto O'Flannery	Cumberland Pharmaceuticals Inc.	3
288	Sunny Coley	Antigen Laboratories, Inc.	4
290	Phillipe Conquest	Physicians Total Care, Inc.	1
39	Ferd Pedrick	Taro Pharmaceuticals U.S.A., Inc.	5
292	Sandor Garrals	Unit Dose Services	2
41	Yevette Chrystal	Lake Erie Medical DBA Quality Care Products LLC	3
295	Leanor Neubigin	Kmart Corporation	4
297	Margit Ebbin	Purdue Pharma LP	5
44	Francoise Goodbarr	DIRECT RX	3
300	Karmen Lampke	ART COSMETICS SRL	1
45	Hobart Coning	Horizon Pharma Inc.	1
302	Salomone Justun	Tarte, Inc	1
47	Worthy Messent	Hanover Pen Corp dba HPC Global	3
48	Gussie Altoft	Amneal Pharmaceuticals of New York, LLC	3
50	Danella Tregian	Hanbit Korea	5
51	Edythe Herrema	Cadila Healthcare Limited	1
54	Bengt Pearne	Bracco Diagnostics Inc	1
55	Billy Hallewell	Apotheca Company	2
58	Benji Possa	Wal-Mart Stores Inc	5
59	Aurilia Hurle	Hetero Drugs Limited	5
60	Catie Ashbey	Cardinal Health	5
62	Gasparo Silvester	Neutrogena Corporation	5
64	Danyelle Dwelly	Liddell Laboratories, Inc.	3
65	Ignacius Canero	Mylan Pharmaceuticals Inc.	3
66	Erv Merrick	Procter & Gamble Manufacturing Company	1
304	Rochella Rosenfarb	Melaleuca Inc.	3
477	Geraldine Lanaway	Uriel Pharmacy Inc.	3
307	Regine Van Der Weedenburg	REMEDYREPACK INC.	1
478	Evaleen Lease	Chain Drug Market Association	4
481	Frants Andrin	Bryant Ranch Prepack	3
482	Bernette Dykes	Beiersdorf Inc	4
75	Drud Mold	Northwind Pharmaceuticals	3
77	Drucy Baldelli	Mckesson (Sunmark)	5
485	Dela Evill	Natural Health Supply	2
79	Isidore Bricket	Shopko Stores Operating	1
319	Ted Nind	Cardinal Health	3
321	Riva Aberdeen	National Vitamin Company	2
322	Ofella Kepp	Clinical Solutions Wholesale	2
323	Lucila Rowcastle	Cardinal Health	2
488	Farand Arrell	Perrigo New York Inc	1
326	Neville Minerdo	Eon Labs, Inc.	1
327	Shandra Ludlam	MSD Consumer Care, Inc.	3
328	Ryan Sheivels	Amerisource Bergen	3
489	Avram Bricknell	McKesson	4
84	Claudianus Pinsent	Washington Homeopathic Products	2
332	Lonnie Peyntue	Jubilant HollisterStier LLC	5
334	Thomasa Hadny	General Injectables & Vaccines, Inc	2
335	Saudra Kembley	Watson Pharma, Inc.	3
336	Mischa Hamner	Antigen Laboratories, Inc.	4
491	Daryle Hebble	AMI Cosmetic Co.,Ltd.	1
339	Valli Sheehan	REMEDYREPACK INC.	5
340	Mollee Gillinghams	Reckitt Benckiser LLC	3
86	Belicia Johann	McKesson	4
342	La verne Lamberti	Rebel Distributors Corp	5
343	Stavro Dreng	LABORATOIRE NUXE	2
344	Tam Mantle	Eagle Distributors,Inc.	1
87	Graehme Keilty	American Regent, Inc.	4
88	Prudence Candwell	CARDINAL HEALTH	1
89	Cirstoforo Bycraft	Safeway	1
349	Philipa Quinevan	Fenwal, Inc.	2
350	Ranee Brittin	GREENBRIER INTERNATIONAL, INC.	2
351	Lotty Lister	Liddell Laboratories, Inc	4
352	Milt Gopsell	Mylan Institutional Inc.	1
90	Darrick Smorthit	Mary Kay INC.	4
355	Kerr Skrine	HyVee Inc	3
356	Toby Benitti	Upsher-Smith Laboratories, Inc.	4
92	Eliot Giorgio	Pfizer Laboratories Div Pfizer Inc.	4
359	Morena Billyeald	Rejuventus, Inc.	4
360	Ketty Rugg	Mirror Pharmaceuticals LLC	2
94	Brandice Winks	Warner Chilcott (US), LLC	5
95	Gale Buncher	Sun Pharma Global FZE	5
364	Minta Thurborn	ALK-Abello, Inc.	1
367	Tom Tennock	Teva Pharmaceuticals USA Inc	1
97	Culver Westrip	BioActive Nutritional, Inc.	2
369	Sidney Milier	Nature's Innovation, Inc.	5
371	Stefano Gillmor	Uriel Pharmacy Inc.	2
372	Paulie Reekie	The Mentholatum Company	2
373	Skipp Sharville	Teva Pharmaceuticals USA Inc	4
375	Lay Bassford	Unifirst First Aid Corporation	2
376	Sherilyn Beddoe	Allergy Laboratories, Inc.	3
377	Lorrie Calderon	STAT Rx USA LLC	3
379	Octavia Yonnie	Baxter Healthcare Corporation	4
99	Cos Troop	Golden State Medical Supply, Inc.	4
102	Filia Joe	ALK-Abello, Inc.	5
384	Judd Lackington	REMEDYREPACK INC.	3
386	Trina Skirrow	Preferred Pharmaceuticals, Inc.	2
387	Sawyere Sherrington	Avema Pharma Solutions	1
105	Devy Shaw	King Bio Inc.	1
106	Dare De Blasi	Wakefern Food Corp.	2
392	Steffane Coole	Concept Laboratories, Inc.	4
393	Sheelagh Golton	Cardinal Health	2
395	Orin Leverton	ALK-Abello, Inc.	1
396	Michaela Lampaert	AvKARE, Inc.	1
108	Gertrud Haycroft	L'Oreal USA Products Inc	5
109	Christin Sowten	Hospira, Inc.	5
401	Hazel Calcut	Kaiser Permanente	3
110	Gordie Di Bernardo	Prasco Laboratories	4
404	Lucian Gainseford	Mylan Institutional Inc.	5
405	Lutero Davidow	Qualitest Pharmaceuticals	3
406	Lilly Beccles	Combe Incorporated	4
111	Hali Guarnier	Physicians Total Care, Inc.	4
112	Denice Songest	Nelco Laboratories, Inc.	3
114	Conrad Vanelli	JC World Bell Wholesale Co., Inc.	3
115	Amandy Wones	ALK-Abello, Inc.	4
120	Demetria Duinbleton	CVS Pharmacy	3
122	Gareth Danilovic	Sandoz Inc	2
124	Evonne Voff	Parfums Christian Dior	5
129	Yevette Fawckner	Mylan Pharmaceuticals Inc.	5
132	Dennie McKew	Mylan Institutional LLC	3
133	Della Ullyatt	BioActive Nutritional, Inc.	5
135	Ddene Danneil	sanofi-aventis U.S. LLC	2
137	Caleb Galpen	TONYMOLY CO., LTD.	3
139	Corty Cracknall	The Body Shop, Wake Forest	1
182	Hadlee Henken	Nelco Laboratories, Inc.	1
494	Gillan Coatham	NCS HealthCare of KY, Inc dba Vangard Labs	1
410	Tiebout Hugenin	Amphastar Pharmaceuticals, Inc.	2
411	Shanda Roggero	Antigen Laboratories, Inc.	5
412	Ruthanne Clemensen	Mylan Pharmaceuticals Inc.	5
413	Sunshine Morrad	MSD Consumer Care, Inc.	1
414	Tilda Boulds	Biogrand Co., Ltd	4
415	Rachel Tatlow	Bedford Laboratories	4
417	Tommy Bolter	ALMATICA PHARMA INC.	3
496	Bentlee Lambol	OCuSOFT Inc.	1
419	Michael Kestle	Fresenius Kabi USA, LLC	1
420	Keven O'Flynn	Mission Pharmacal Company	3
497	Gwyn Ely	Mylan Pharmaceuticals Inc.	3
423	Rebecca Mingaye	NATURE REPUBLIC CO., LTD.	1
148	Cirstoforo Willsmore	Innovative Brands, LLC	5
500	Christen Jaskiewicz	G.S. COSMECEUTICAL USA, INC.	3
501	Gifford Lawlance	Carilion Materials Management	3
428	Tobe Dibdale	Warner Chilcott Pharmaceuticals Inc.	5
430	Jolee Evangelinos	Uriel Pharmacy Inc.	5
154	Godard Stuchbery	GeneraMedix Inc.	5
434	Kandy Naish	Barr Laboratories Inc.	1
435	Karilynn Hinkens	Ranbaxy Pharmaceuticals Inc	1
436	Royal Vickar	YS Health Corp.	4
155	Bartolemo Joss	Lake Erie medical DBA Quality Care Products LLC	1
157	Curry Mulliner	General Injectables & Vaccines, Inc	4
505	Fredia Carlyon	Ningbo Dowland Daily Health Co., Ltd	2
442	Myrtice Bodman	Valeant Pharmaceuticals North America LLC	1
507	Imogene Allibone	Sanofi Pasteur Inc.	5
510	Emile Covil	Topco Associates LLC	5
449	Madelyn McGuffie	McKesson	3
450	Karlie Haine	REMEDYREPACK INC.	2
451	Teddy Rosenwald	Cardinal Health	2
452	Warde Kenington	Jubilant HollisterStier LLC	1
453	Junina Robertson	REMEDYREPACK INC.	5
455	Klarrisa Daviot	Hospira, Inc.	5
456	Sosanna MacShirie	Sanum Kehlbeck GmbH & Co. KG	1
457	Mildred Lauder	Rite Aid	4
163	Emogene Tersay	A-S Medication Solutions LLC	5
459	Tedi Creyke	B. Braun Medical Inc.	1
460	Toddy Glading	Carilion Materials Management	1
461	Maximilien Reasce	Sandoz Inc	4
164	Hubert Geane	Watson Pharma, Inc.	4
463	Lilia Carruth	Guna spa	1
465	Susi Castanares	Kosan Kozmetik Sanayi ve Ticaret A.S.	2
470	Loralyn Burnett	Aphena Pharma Solutions - Tennessee, LLC	5
168	Bell Eltune	NCS HealthCare of KY, Inc dba Vangard Labs	5
170	Jemima Kopisch	Meijer Distribution Inc	4
475	Malinde Traice	CVS Pharmacy	5
476	Roxana Riseam	Laboratoires Boiron	4
171	Damon Joiris	NATURE REPUBLIC CO., LTD.	3
479	Sibilla Christaeas	Meijer Distribution Inc	4
480	Tanhya Harby	Antigen Laboratories, Inc.	3
173	Jannel Proswell	Sun & Skin Care Research, LLC	4
174	Gauthier Margerrison	Nelco Laboratories, Inc.	1
484	Rod MacDunlevy	Ross Healthcare Inc.	4
175	Edsel Cornill	Performance Health Inc.	5
487	Marjy Marland	Church & Dwight Co., Inc.	1
177	Clifford Karsh	Carilion Materials Management	1
178	Inglis Whitworth	Laboratoires Clarins S.A.	4
490	Parsifal Cansdall	CSL Behring GmbH	3
179	Ari Baseggio	SPIRIT PHARMACEUTICALS,LLC	1
492	Vassili Leadbetter	WALGREEN CO.	1
493	Ramona Berthelmot	KANEBO COSMETICS INC	1
180	Gerrard Gillmore	Ventura Corporation LTD.	2
495	Sheffy Dilrew	Baxter Healthcare Corporation	4
499	Roanne Rein	GFS US LLC	3
184	Corena Bodleigh	Albert Max, Inc.	2
185	Franz Kinkead	Medline Industries, Inc.	3
502	Neil Ellerton	PD-Rx Pharmaceuticals, Inc.	4
503	Nelle Weiser	Concept Laboratories, Inc.	4
186	Angeline Nobbs	Enchante Accessories	4
187	Darrell Philippon	Hospira, Inc.	1
506	Vallie Connell	MAKESELLER GROUP INC.	3
189	Bran Peckett	Procter & Gamble Manufacturing Company	3
190	Cristi McCluney	Bare Escentuals Beauty, Inc.	3
192	Nichole Austick	Major Pharmaceuticals	1
197	Arlena Waadenburg	Bare Escentuals Beauty Inc.	3
201	Denna Duffield	Pacific Island Medical, Inc.	4
204	Jamison Pattie	JELMA PHILIPPINES INC	2
213	Dyan Sidery	TAYLOR JAMES, LTD.	2
508	Klarika Ferres	Chantecaille Beaute Inc	1
509	Waldemar Dansken	Carlsbad Technology, Inc	4
511	Rosalinde Carnaman	Changzhou Jianze Sanitary Material Co., Ltd.	3
512	Annadiane Troy	Liddell Laboratories, Inc.	4
513	Fidel Wraight	ALK-Abello, Inc.	2
515	Shelley Bootton	REMEDYREPACK INC.	1
516	Valentine Cordet	Uriel Pharmacy Inc.	4
517	Martyn Goodday	Strides Arcolab Limited	5
514	Haley Dixon	Advanced Generic Corporation	1
218	Jerrome Greig	SUN PHARMA GLOBAL INC.	2
521	Welsh Piechnik	Home Sweet Homeopathics	5
522	Suzi Antat	Meijer	2
523	Jobie Risbrough	NCS HealthCare of KY, Inc dba Vangard Labs	1
524	Kylie Brandolini	Ingenus Pharmaceuticals, LLC	5
525	Letitia Philliphs	Pharmacia and Upjohn Company	4
518	Arluene Cursey	PD-Rx Pharmaceuticals, Inc.	5
519	Brandyn Errington	Peaceful Mountain, Inc.	3
530	Vanya Widmoor	Rebel Distributors Corp	5
520	Britte Butterley	NINGBO JIANGBEI OCEAN STAR TRADING CO.,LTD	1
224	Cyndie Wagnerin	Accudial Pharmaceutical, Inc.	5
226	Darby Brazelton	Feelgood Health	2
535	Katey Toffanini	Mylan Institutional Inc.	4
536	Virgie Heinemann	Rare Disease Therapeutics, Inc.	1
230	Amanda Santostefano.	AbbVie Inc.	5
231	Everett Kimm	Hospira, Inc.	2
232	Kath Polamontayne	Eli Lilly and Company	4
543	Kevon Gunson	Med-Health Pharma, LLC	5
233	Federico Rizzone	Cardinal Health	1
234	Hilda Cubbino	Genentech, Inc.	3
235	Antoine Matteau	Rebel Distributors Corp	1
236	Collette Fulham	Roerig	1
238	Carlye Meah	Caldwell Consumer Health LLC	3
551	Zollie Hungerford	Duane Reade	4
552	Mary Chalker	Carilion Materials Management	1
240	Berte Haeslier	King Bio Inc.	4
555	Leta Yoxall	Actavis Kadian LLC	2
556	Zelda Jacketts	Expanscience Laboratoires d/b/a Mustela	5
241	Eveline Friedlos	Kramer Laboratories	1
558	Kayley Shackel	Xiamen Olivee Daily Use Chemical Co., Ltd.	5
559	Shea Attlee	Apotheca Company	2
560	Suzanne Fortye	Aphena Pharma Solutions - Tennessee, LLC	2
562	Tybi Dobney	Sanum Kehlbeck GmbH & Co. KG	3
242	Janel Taborre	Procter & Gamble Manufacturing Company	1
564	Lucia MacCurlye	YBK Investment, INC	1
243	Dori Guage	Allermed Laboratories, Inc.	2
566	Valentina Tight	Rebel Distributors Corp	2
246	Colly De Gregario	Pharmalab Enterprises Inc	2
570	Sella Belfrage	Forces of Nature	1
571	Roberta Harnett	Procter & Gamble Manufacturing Company	1
572	Wendall Bland	Apotex Corp.	4
574	Monroe Brompton	APP Pharmaceuticals, LLC	2
248	Cristobal Dash	Rebel Distributors Corp	5
249	Orton Lote	Kingdom Animalia, LLC DBA Hourglass Cosmetics	5
577	Lorette Karpychev	Midway Advanced Products, LLC	4
579	Marlena Bautiste	Demoulas Super Markets	3
581	Monte Ingledow	Feelgood Health	5
582	Lanny Solland	Apotheca Company	4
585	Tymothy Marciskewski	University Medical Pharmaceuticals Corp	3
587	Suzette Kellett	SKINFOOD CO., LTD.	4
588	Waylan Rann	Apotheca Company	3
589	Katuscha Tincombe	Jafra Cosmetics International Inc	2
590	Peyton Drennan	Bunzl Processor Distribution LLC	3
257	Baxy Dowden	Humphreys Pharmacal, Incorporated	3
593	Minetta Soan	Procter and Gamble Manufacturing Company	1
594	Karly Dack	VIATREXX BIO INCORPORATED	3
595	Kenneth McGarrie	Perrigo New York Inc	1
596	Lynnell Bucher	Teva Pharmaceuticals USA Inc	4
258	Fredek Haime	Sam's West Inc	4
599	Locke Perri	Nelco Laboratories, Inc.	1
601	Merissa Sturdy	State of Florida DOH Central Pharmacy	5
603	Vic Quayle	LAURA GELLER MAKE UP INC.	4
604	Valera Olney	Aidarex Pharmaceuticals LLC	4
605	Ham Mathivet	REMEDYREPACK INC.	1
262	Fae Twelve	AGABANG & COMPANY	4
263	Bancroft Brandone	Lake Erie Medical DBA Quality Care Products LLC	5
265	Bathsheba Oehm	Uriel Pharmacy Inc.	1
267	Anabelle Bourgour	Exelan Pharmaceuticals, Inc.	4
269	Ivonne Dunkinson	Collection 2000 Cosmetics,Inc.	3
271	Bobinette Lindhe	WIZCOZ CORPORATION LTD	5
272	Garwin Jellings	Air Liquide America Specialty Gases LLC	4
273	Glad Justice	Clinical Solutions Wholesale	4
274	Donal Wightman	Nelco Laboratories, Inc.	4
276	Jedediah Jackling	CVS Pharmacy	2
278	Chiquia Snedker	Aphena Pharma Solutions - Tennessee, LLC	4
279	Berti D'Ambrosio	Energizer Personal Care LLC	4
607	Trev Markushkin	Avon Products, Inc.	4
608	Ruthy Brislen	SJ Creations, Inc.	4
526	Madella Boole	CorePharma, LLC	1
282	Brook Limrick	ALK-Abello, Inc.	1
611	Lea Chilcott	Takeda Pharmaceuticals America, Inc.	1
612	Sibilla Sauniere	Mylan Pharmaceuticals Inc.	2
283	Debby Solan	New Horizon Rx Group, LLC	4
527	Jaquelin Ainger	Teva Pharmaceuticals USA Inc	5
615	Jillayne Vanyatin	The Doctor's Cosmetic Inc	1
616	Palmer Poynzer	Golden State Medical Supply, Inc.	3
286	Brook Klewer	China Ningbo Shangge Cosmetic Technology Corp.	4
619	Kalvin Egarr	Antigen Laboratories, Inc.	1
287	Bertram Pipping	Unit Dose Services	1
621	Nigel Eallis	Amneal Pharmaceuticals, LLC	3
622	Ransell Semkins	Bryant Ranch Prepack	2
529	Cirillo Nuzzi	West-ward Pharmaceutical Corp.	2
625	Kristos Negri	Lake Erie Medical DBA Quality Care Products LLC	5
531	Gus Collier	Nelco Laboratories, Inc.	1
291	Findlay Bessell	American Regent, Inc.	4
628	May O' Dooley	Apotex Corp.	1
629	Seana Dorrance	Contract Pharmacy Services-PA	4
532	Colleen Sarfas	Akorn, Inc.	3
293	Inger Pybworth	HOMEOLAB USA INC	3
632	Meghan Toombes	TARGET Corporation	5
294	Aundrea Danser	Antigen Laboratories, Inc.	5
533	Christian Nelthropp	Genzyme Corp.	1
635	Theodosia Noden	Actavis Elizabeth LLC	1
534	Blondy Offner	Cosmetica Laboratories Inc.	5
298	Iona Hazelden	Deb USA, Inc.	3
639	Netty Niaves	Solco healthcare U.S., LLC	1
640	Livia Biasotti	Fenwal, Inc.	5
299	Irvine Cotgrove	General Injectables & Vaccines, Inc	2
642	Reggy Baroche	Procter & Gamble Manufacturing Company	5
643	Willie Twohig	Native Remedies, LLC	5
644	Nicolle Prettjohn	NARTEX LABORATORIOS HOMEOPATICOS SA DE CV	2
646	Vita Rosendall	Bryant Ranch Prepack	1
301	Clarie Kilbee	Novartis Pharmaceuticals Corporation	3
303	Izaak Longland	Fenwal, Inc.	3
650	Shirline Mancer	Lake Erie Medical DBA Quality Care Products LLC	3
537	Ferdinande Jaan	Procter & Gamble Manufacturing Company	3
652	Marlon Achrameev	Apotheca, Inc.	4
305	Gerik Emslie	Sundial Group LLC	1
654	Lindy Broscombe	Ventura Corporation Limited	2
655	Vicky Weaben	Nelco Laboratories, Inc.	5
538	Husain Renackowna	The Procter & Gamble Manufacturing Company	4
308	Christina Bloy	Elizabeth Arden, Inc	2
659	Lucas Jaegar	Enzyme Solutions, Inc.	1
660	Rancell Tester	Aptalis Pharma US, Inc.	3
661	Olag Ickowicz	Publix Super Markets Inc	5
662	Linet Fullylove	Physicians Total Care, Inc.	2
663	Tyson Broomhead	Teva Pharmaceuticals USA Inc	4
666	Rhody Heinzler	Mallinckrodt Inc.	1
667	Paxon Gini	Feelgood Health	1
668	Noreen McInnery	AvPAK	4
310	Iona Soldi	Medicine Shoppe International Inc	5
311	Goddart Josifovic	Upsher-Smith Laboratories, Inc.	2
313	Dacy Downs	Antigen Laboratories, Inc.	5
673	Mahala Pixton	Kroger Company	4
314	Clem Meckiff	ALK-Abello, Inc.	1
315	Andee Carvell	Boll Medical Inc.	5
676	Verena Gisburne	Nelco Laboratories, Inc.	3
677	Kellyann Jacklin	CarePluss Pharma S.A. de C.V.	5
678	Whit Maevela	Energique, Inc.	5
679	Nickola Bear	King Bio Inc.	1
316	Etienne Faulks	Aphena Pharma Solutions - Tennessee, Inc.	3
681	Nissa MacGown	AMERICAN CONSUMER PRODUCTS LLC	3
682	Tiff Aucutt	BioActive Nutritional, Inc.	1
683	Roz Mathy	True Botanica, LLC	1
317	Yolanda Gibbings	Shionogi Inc.	3
685	Nissie Glamart	Target Corporation	5
318	Aurie Lintott	REMEDYREPACK INC.	3
320	Damian Sallter	Save-A-Lot Food Stores Ltd	5
690	Lettie Drury	Natureplex, LLC	1
691	Joelynn McCafferky	Baxter Healthcare Corporation	4
692	Theo Ree	Bath & Body Works, Inc.	3
695	Julieta Cracoe	State of Florida DOH Central Pharmacy	5
324	Gwendolyn Fossitt	A-S Medication Solutions LLC	5
697	Murielle Grossier	Aidarex Pharmaceuticals LLC	1
698	Lyn Formigli	Dr. Donna Restivo DC	3
701	Petronia Giblin	Singhfam Corporation	5
704	Nolan Cordes	Watson Pharma, Inc.	4
329	Dorry Thomke	Buck Head Products & Systems	4
330	Elly But	NCS HealthCare of KY, Inc dba Vangard Labs	5
331	Collen Ianne	KAISER FOUNDATION HOSPITALS	4
333	Edgardo Mattityahou	L. Perrigo Company	3
338	Yorke Crauford	Watson Pharma, Inc.	4
341	Carling Goodlad	American Sales Company	3
408	Emelyne Ellwell	sanofi-aventis U.S. LLC	1
345	Ernie Jermey	Neutrogena Corporation	4
707	Valdemar Peacher	Gordon Laboratories	3
347	Dun Stillman	Watson Laboratories, Inc.	5
348	Halette Dunlap	Physicians Total Care, Inc.	3
712	Rog Denisovo	Jinju Bio Food	4
409	Cordy Triggle	Brighton Pharmaceuticals, Inc.	2
548	Alli Perton	Aphena Pharma Solutions - Tennessee, LLC	2
539	Carolina Winger	PD-Rx Pharmaceuticals, Inc.	4
716	Marsha Healy	Valeant Pharmaceuticals North America LLC	2
540	Cacilie Jarrell	DOLGENCORP,LLC	3
718	Rudolfo Fidgett	Quality Home Healthcare, Inc.	5
353	Corenda Fitt	Mutual Pharmaceutical Company, Inc.	1
354	Catlee McQuin	SUPERVALU INC	4
721	Tremayne Petry	Bayer HealthCare Pharmaceuticals Inc.	4
541	Cloris Vann	Roxane Laboratories, Inc	3
723	Lorettalorna Norcutt	Changzhou Maokang Medical Products Co., Ltd	5
542	Base Ricardet	Med-Health Pharma, LLC	3
357	Con Perham	Fenwal, Inc.	4
358	Glynn Kobiela	AvPAK	5
544	Colette Ranyelld	L'Oreal USA Products Inc	1
729	Reggis Birtwisle	Bayer Corporation Consumer Care Division	4
545	Edee Lindop	Bryant Ranch Prepack	2
732	Sioux Marrion	Laboratorios Jaloma, S.A. de C.V.	1
733	Vonny Josskovitz	NARS COSMETICS	4
734	Taite Gabits	St Marys Medical Park Pharmacy	1
361	Bee Reinhart	Eon Labs, Inc.	1
736	Ulrikaumeko Fisby	KAISER FOUNDATION HOSPITALS	2
737	Kari Mauro	Physicians Total Care, Inc.	4
738	Marylou Bishell	Aidarex Pharmaceuticals LLC	3
739	Pooh Pedrol	Space Brands Limited	4
362	Jeniffer Sidwell	QUALITY CHOICE (Chain Drug Marketing Association)	4
741	Sheree Swinden	Nelco Laboratories, Inc.	1
742	Kale Dowzell	Cleansia Co Ltd	3
743	Klemens Baldacchi	Combe Incorporated	3
744	Kit McConachie	Sandoz Inc	5
745	Rivy Humfrey	Physicians Total Care, Inc.	2
747	Romain Stamps	Cardinal Health	5
546	Jareb Lammers	Apotex Corp.	3
749	Renaldo Audritt	DIRECT RX	5
547	Edithe Siebert	Pfizer Laboratories Div Pfizer Inc	1
751	Wilbert Caswall	Walgreen Company	4
752	Siusan Malyj	La Prairie, Inc.	5
365	Arabelle Carcas	Pfizer Laboratories Div Pfizer Inc	4
754	Leland Stormes	McKesson	5
366	Jessee O'Cosgra	W. F. Young, Inc.	1
549	Hallie McKeeman	Bath & Body Works, Inc.	1
370	Jarvis Dorking	Uriel Pharmacy Inc	1
550	Florance Buckthought	Home Sweet Homeopathics	5
761	Ricky Foulgham	Breckenridge Pharmaceutical, Inc	4
762	Sig England	Patterson Dental Supply Inc	4
765	Jolynn Gowing	Perrigo New York Inc	4
554	Eugenia Grimolbie	Golden Touch LLC	2
768	Vernen Saltwell	Guerlain	3
769	Rainer Martinets	Guna spa	5
557	Gearalt Wolton	Johnson Labs, Inc.	3
773	Melessa Stirton	Rebel Distributors Corp	1
380	Benita Hrus	Actavis Pharma, Inc.	2
381	Jedd Brahams	Bayer HealthCare Pharmaceuticals Inc.	3
776	Joaquin Windybank	Uriel Pharmacy Inc.	1
382	Augie Belfelt	PD-Rx Pharmaceuticals, Inc.	2
778	Vivie Gras	Par Pharmaceutical Inc.	4
779	Sayre Meeks	WOCKHARDT LIMITED	2
383	Caresa Torry	Contract Pharmacy Services-PA	1
782	Micaela Evison	LVMH Fragrance Brands	5
784	Sauveur Bantock	A-S Medication Solutions LLC	1
785	Lindsy Klimentyonok	Allergy Laboratories, Inc.	5
388	Cort Webb-Bowen	Sanum Kehlbeck GmbH & Co. KG	4
790	Malvina Fannin	Unit Dose Services	4
389	Dominga Byk	Lupin Pharmaceuticals, Inc.	2
792	Lynna Selesnick	Apotheca Company	4
793	Merrile Bussell	Teva Pharmaceuticals USA Inc	5
390	Christiana McCowan	West-ward Pharmaceutical Corp	3
796	Rebecka Shelper	Walgreens	5
561	Otto Lambden	Avion Pharmaceuticals, LLC	3
798	Penny Kharchinski	McKesson	4
802	Molli Tough	AMERICAN SALES COMPANY	5
804	Lucille Polson	Nelco Laboratories, Inc.	1
397	Cullie Wontner	Family Dollar	3
399	Gabie Swanwick	Purminerals	1
400	Easter Sporrij	Virtus Pharmaceuticals LLC	1
407	Candy Siggens	REMEDYREPACK INC.	1
810	Lynnea Belchambers	Iluminage Beauty, Inc.	1
811	Stormie Kettlestring	Family Dollar Services Inc	3
813	Wanids Fayerbrother	Sun Pharmaceutical Industries Limited	1
815	Sergio Cristofalo	Medtech Products Inc.	1
563	Francisco Pinckstone	GE Healthcare Inc.	2
817	Stanford Cratere	Napoleon Perdis Cosmetics, Inc	3
818	Rubia Capelin	Tropical Seas, Inc.	4
565	Eugenie Clausius	Actavis Elizabeth LLC	3
567	Angelita Baughan	Ventura Corporation LTD	4
823	Judd Pyburn	NorthStar RxLLC	3
568	Allie Lambourn	Unit Dose Services	5
825	Julian Pennycuick	ALK-Abello, Inc.	3
826	Tanhya Payler	RxPak Division of McKesson Corporation	2
569	Dorree Rimbault	Antigen Laboratories, Inc.	2
829	Sheilakathryn Kensington	Qualitest Pharmaceuticals	3
831	Meghan Scriven	Camber Pharmaceuticals	4
832	Lindon Davenhill	JCI INSTITUTE OF MEDICAL SCIENCE	1
833	Joanna Armatys	REMEDYREPACK INC.	4
835	Kendal Astling	B. Braun Medical Inc.	1
836	Ludvig Balleine	APP Pharmaceuticals, LLC	3
573	Gwendolyn Lowis	WraSer LLC	3
839	Lilia Sweetenham	MWI/Vet One	3
840	Wade Ashleigh	Dynarex Corporation	3
575	Derrek Organ	Nelco Laboratories, Inc.	1
576	Chrotoem Wellington	A&Z Pharmaceutical, Inc.	3
578	Claire Savidge	Teva Pharmaceuticals USA Inc	1
580	Darelle Molineux	ALK-Abello, Inc.	1
850	Reece Goding	Reckitt Benckiser LLC	5
583	Corie Menaul	Ventura International LTD.	4
584	Flor Corden	Cardinal Health	4
859	Pearl Stannard	Lupin Pharmaceuticals, Inc.	3
592	Bink Cruse	Watson Laboratories, Inc.	5
865	Lynda Tipperton	B. Braun Medical Inc.	3
866	Salome McGroarty	Air Liquide America Specialty Gases LLC	1
870	Solomon Verbruggen	VALUE MERCHANDISERS COMPANY, INC.	3
871	Reinaldos Muddle	Lake Erie Medical DBA Quality Care Products LLC	3
597	Emlen Brisard	RedPharm Drug Inc.	2
873	Roderigo Richardon	Conopco Inc. d/b/a Unilever	5
598	Dinnie McElrath	Safeway	4
876	Sisile Guyet	BioActive Nutritional, Inc.	1
600	Gene Fasson	Noxell	4
878	Marley Robjohns	Pharmacia and Upjohn Company	3
879	Vivi Wyant	The Mentholatum Company	3
602	Angelica Winmill	Northwind Pharmaceuticals	1
882	Monica Thewles	GANZ U.S.A., LLC	3
883	Leo Wallentin	Hospira, Inc.	4
885	Vince Waslin	Physicians Total Care, Inc.	4
887	Teddie Czyz	DOLGENCORP INC	2
888	Skyler Scullin	Laboratoires Clarins S.A.	5
606	Grady Stillmann	Blue Cross Laboratories, Inc.	1
891	Trumann Adamovich	Bausch & Lomb Incorporated	4
892	Ramona Dunphy	Premier Value	2
894	Mariam Baggally	McKesson Contract Packaging	2
895	Karol Giercke	Target Corporation	2
896	Siegfried De Benedictis	Greenstone LLC	5
897	Tristan Lortz	Procter & Gamble Manufacturing Co.	2
898	Livia Hammerstone	Unit Dose Services	2
900	Lucias Mattielli	Medtech Products Inc.	2
609	Gerda Riches	Direct Rx	3
610	Jack Casham	Teva Women's Health, Inc.	3
903	Kissiah Neesam	Rebel Distributors Corp	3
905	Marlo Shoreson	Zydus Pharmaceuticals (USA) Inc.	2
906	Randall Sargood	L.N.K. International, Inc.	5
907	Noak Hewes	Indiana Botanic Gardens	4
908	Odele Campbell-Dunlop	Target Corp.,	4
909	Marielle Muckian	General Injectables & Vaccines, Inc	4
911	Petunia Neeve	ProStat First Aid	5
912	Wayland Melan	Wockhardt USA LLC.	3
913	Townie Scotting	Kareway Product, Inc.	4
915	Nedi Zammett	Sion Biotext Medical Ltd	1
613	Jannelle Kurt	Legacy Pharmaceutical Packaging	3
917	Ruthe Morrad	Actavis Elizabeth LLC	5
614	Billi Donoghue	Heel Inc	2
920	Kennett Scholcroft	SJ Creations, Inc.	1
921	Thekla Khosa	Dyad Medical Sourcing, LLC	5
923	Virgie Malinson	Lake Erie Medical DBA Quality Care Products LLC	1
617	Boycie Cristofolo	Unit Dose Services	2
925	Malissa Partlett	AvPAK	4
926	Jobye Ashfield	Neutrogena Corporation	1
618	Flynn Farress	Warner Chilcott (US), LLC	3
928	Trixy Von Salzberg	Dukal Corporation	2
930	Stevie Wollard	ALCON LABORATORIES, INC.	5
620	Arly O' Hanvey	Chattem, Inc.	5
933	Tiena Bourges	Nelco Laboratories, Inc.	3
934	Mareah Howis	Mylan Pharmaceuticals Inc.	3
936	Luis Oland	SHISEIDO AMERICAS CORPORATION	4
937	Timofei Wark	CBI Laboratories, Inc	2
623	Fidelio Biggans	Moore Medical LLC	1
624	Kacey Audsley	Ventura International LTD	4
940	Ogdon Brislane	Par Pharmaceutical, Inc.	1
941	Korrie Passo	pH R&D LLC	5
942	Mahmoud Edgecombe	Natural Health Supply	3
943	Pierrette Rosin	Newton Laboratories, Inc.	3
946	Nehemiah Barkworth	Wockhardt USA LLC.	1
627	Estel Wilhelmy	Lake Erie Medical DBA Quality Care Products	3
949	Phebe Haddleton	SJ Creations, Inc.	3
630	Dalis Laughrey	Clinical Solutions Wholesale	4
631	Carrie Avrasin	Antigen Laboratories, Inc.	3
633	Craggie De Bruijn	Meijer Distribution Inc	5
634	Brock Gandy	Sandoz Inc.	2
636	Dotty O'Driscole	Lake Erie Medical DBA Quality Care Products LLC	5
637	Garreth Ciccone	Novartis Pharmaceuticals Corporation	1
638	Dody Tabard	Indiana Botanic Gardens	4
961	Pietrek Yarmouth	Nelco Laboratories, Inc.	4
641	Corissa Lister	Jubilant HollisterStier LLC	4
964	Padget Rodway	A-S Medication Solutions LLC	4
966	Rora Grunguer	L Perrigo Company	5
967	Kelsey Etheridge	Teva Pharmaceuticals USA Inc	3
969	Rockie Diviny	Sandoz Inc	5
971	Shepard Dyson	NATURE REPUBLIC CO., LTD.	1
645	Hilary Downage	Cardinal Health	3
975	Larine Volk	Family Dollar	5
648	Elinor O'Sherrin	Nelco Laboratories, Inc.	4
651	Gerry Duchan	Deseret Biologicals, Inc.	2
653	Garwin Curbishley	Physicians Total Care, Inc.	4
656	Emmett Foyster	Allermed Laboratories, Inc.	3
985	Win Van Eeden	Merle Norman Cosmetics, Inc	5
657	Dulcie Joao	Nelco Laboratories, Inc.	5
988	Skip Wildish	Perrigo New York Inc	2
989	Ricardo Le Pruvost	Bare Escentuals Beauty, Inc.	1
990	Rosina Zanelli	Bayer HealthCare LLC, Consumer Care	3
994	Marika Patesel	ALK-Abello, Inc.	3
997	Terese Densumbe	McKesson	1
998	Krisha Bartrum	Time-Cap Labs, Inc	5
665	Ilyssa Ludgrove	CARROLL COMPANY	4
669	Erwin Lowings	Rite Aid Pharmacy	2
670	Burke Rhoddie	Physicians Total Care, Inc.	2
671	Dunc Ferber	REMEDYREPACK INC.	3
1002	m	hj	2
672	Clim McLaverty	Carlsbad Technology, Inc.	2
674	Celia Sibary	DZA Brands LLC	3
724	Alyda Trudgion	STAT Rx USA LLC	1
725	Jennine Hambelton	Roxane Laboratories, Inc	3
726	Angy Hapke	Cardinal Health	1
727	Carma Sima	Molnlycke Health Care US, LLC	1
728	Dee Maasz	New Sun Inc.	3
730	Court Viccary	Fresenius Medical Care North America	5
735	Dare McAnalley	General Injectables & Vaccines, Inc	3
740	Blanca Junkin	Mission Hills, S.A. de C.V.	2
746	Florance Tarrant	Preferred Pharmaceuticals, Inc.	1
748	Matthus Drescher	Parfums Christian Dior	3
750	Clarie Hinchon	Apotex Corp.	3
753	Carmela Taw	Major Pharmaceuticals	2
755	Ilse Drinkeld	H E B	5
756	Ema Hasely	Dermalogica, Inc.	1
757	Barny Vernazza	ALK-Abello, Inc.	4
759	Chrissie Danilchik	Preferred Pharmaceuticals, Inc.	3
760	Cchaddie Burmaster	Rebel Distributors Corp	4
763	Darcy Mazella	Teva Pharmaceuticals USA Inc	4
764	Camille Redihalgh	Major Pharmaceuticals	1
766	Barney Humber	Triax Pharmaceuticals, LLC	5
770	Corella Tomasik	Townley, Inc.	3
771	Christie Tiller	Caraco Pharmaceutical Laboratories, Ltd.	3
772	Glen Marqyes	Nelco Laboratories, Inc.	1
774	Helge Paten	ALK-Abello, Inc.	4
777	Bennie Jose	CVS Pharmacy, Inc	4
780	Dianne Ginman	U.S. Pharmaceuticals	1
783	Casandra Knath	Coty US LLC	5
787	Alexandre Peschet	Cardinal Health	2
788	Elfrida Antoney	Amneal Pharmaceuticals	4
789	Jacklin Prandin	Nelco Laboratories, Inc.	3
791	Calypso Shore	Newton Laboratories, Inc.	1
794	Clifford Pleaden	L Perrigo Company	4
795	Forrester Willox	Fenwal, Inc.	5
797	Andreas Radolf	Natural Health Supply	4
799	Deeann Mollitt	Amneal Pharmaceuticals	5
800	Zabrina Oliva	Heritage Pharmaceuticals Inc.	1
801	Berthe Leversha	REMEDYREPACK INC.	3
805	Austin Cockman	Aruba Aloe Balm NV	2
806	Hortensia Bullick	West-Ward Pharmaceutical Corp.	1
807	Ingra Goskar	Genzyme Corporation	1
812	Avram MacKaig	The Hain Celestial Group, Inc.	2
816	Eran Kirdsch	Seyer Pharmatec, Inc.	3
820	Cariotta Ciotto	EQUATE (Walmart Stores, Inc.)	5
821	Bunny Nield	Native Remedies, LLC	3
822	Corly Goodrick	La Prairie, Inc.	2
824	Gonzales Popham	L'oreal Usa, Inc.	5
827	Gavin Baudinot	Boca Pharmacal, Inc.	5
828	Blondelle de Keep	Bryant Ranch Prepack	2
830	Wolfy Bentote	Combe Incorporated	5
834	Dawn Humbert	Walgreens Company	3
837	Blisse Presnail	SUPERVALU INC.	3
838	Dalia Bright	Western Family Foods Inc	4
841	Fannie Dyka	Nelco Laboratories, Inc.	4
842	Hermina Timewell	Sandoz Inc	1
843	Jessie Camin	Aidarex Pharmaceuticals LLC	2
844	Birdie Creamen	Physicians Total Care, Inc.	1
845	Antin Whittock	Insight Pharmaceuticals	2
848	Cass Rigard	Amgen Inc	4
849	Esta Salway	Genzyme Corporation	5
851	Erastus Lafaye	Nelco Laboratories, Inc.	4
853	Cecile Kerrey	Nnodum Pharmaceuticals	5
856	Blanche Grisewood	Geiss, Destin & Dunn, Inc (Goodsense)	3
857	Casi Benardeau	Nelco Laboratories, Inc.	2
858	Goldi Wilbor	General Injectables & Vaccines, Inc	3
860	Freeland O'Rafferty	Physicians Total Care, Inc.	5
861	Portie Stubley	Safeway	2
862	Isidoro Kemell	Cellinbio Co Ltd	3
863	Polly Malarkey	Heritage Pharmaceuticals Inc.	2
864	Horacio Bestman	Nelco Laboratories, Inc.	2
867	Gilbertina Ethelstone	Physicians Total Care, Inc.	2
868	Case Ginnane	Sun Pharmaceutical Industries Limited	2
869	Devin Medendorp	Excellium Pharmaceutical, Inc,	3
872	Brittaney Partridge	Peachtree Playthings, Inc.	1
874	Jenifer Horlock	Rite Aid	5
875	Emlyn Hallum	Uriel Pharmacy Inc.	5
877	Freddie Eagling	GE Healthcare Inc.	1
880	Colette Dadswell	NCS HealthCare of KY, Inc dba Vangard Labs	2
881	Artus Krause	Cardinal Health	2
884	Almeria Sandbrook	Washington Homeopathic Products	4
886	Heinrick Savery	Similasan Corporation	2
889	Arlen Hendrikse	Dispensing Solutions, Inc.	2
890	Fabien Reap	Tri-Coastal Design Company Inc.	3
893	Carleton Dillintone	Cardinal Health	5
899	Jarad Bazeley	Antigen Laboratories, Inc.	5
901	Janos Pechet	REMEDYREPACK INC.	3
902	Elbertina Pavlata	Baxter Healthcare Corporation	2
904	Dunc Fayerbrother	Cardinal Health	3
910	Gustave Lowman	Tarte Inc	3
914	Dougie Mereweather	AMERICAN SALES COMPANY	5
916	Edik Sirey	GUANGXI YULIN PHARMACEUTICAL GROUP CO LTD	1
918	Arie Bennough	Cardinal Health	2
919	Callean Banbridge	Legacy Pharmaceutical Packaging	1
922	Germayne Colleck	Trinity Pharmaceuticals, LLC	4
924	Donnie Iacobetto	Sellars Absorbent Materials	1
927	Alyda Bootman	WOCKHARDT LIMITED	1
929	Donaugh Potbury	UV Natural International Pty Ltd	2
931	Dianne Sylett	Dispensing Solutions, Inc.	1
932	Grissel Draycott	Novartis Vaccines and Diagnostics GmbH	2
935	Birk Thayre	Cardinal Health	4
938	Eolande Hellard	REMEDYREPACK INC.	4
939	Desmond Bridgett	Procter & Gamble Manufacturing Company	2
945	Freddy Bownd	Lake Erie Medical DBA Quality Care Products LLC	5
947	Fifi Gilkes	Samson Medical Technologies, LLC	1
948	Carmine Fyrth	Wakefern	2
950	Evie Simonini	SHISEIDO AMERICA INC.	4
951	Cy Adamovicz	Syntrion GmbH	5
952	Frieda Hurtado	Preferred Pharmaceuticals, Inc.	5
954	Godiva Plante	Merle Norman Cosmetics, Inc	4
955	Aundrea Firth	Teva Pharmaceuticals USA Inc	2
956	Berti Petrushka	REMEDYREPACK INC.	3
957	Calhoun Himsworth	Cardinal Health	2
958	Aurlie Betteney	Blenheim Pharmacal, Inc.	2
959	Jeff Juliff	Accord Healthcare, Inc.	5
960	Enid Gurney	Winthrop U.S.	3
963	Winston Girdwood	Army and Air Force Exchange Service	2
965	Gage Lenin	Lifewave, Inc.	5
968	Annadiane Jakobsson	Wausau Paper Towel & Tissue, LLC	3
972	Ethelred Lippingwell	DN Company Co., Ltd.	4
973	Corbet Furse	Physicians Total Care, Inc.	3
976	Domingo Bolam	HANBANGMEIN COSMETICS	3
977	Brod Lofts	Aptalis Pharma US, Inc.	5
978	Corny Gallymore	ALK-Abello, Inc.	3
979	Beverly Camp	Novartis Pharmaceuticals Corporation	4
981	Dru Di Iorio	A-S Medication Solutions LLC	1
982	Arlen Aldrich	Clinical Solutions Wholesale	2
983	Dannye Geertsen	Antigen Laboratories, Inc.	4
984	Erica De Miranda	VersaPharm Incorporated	3
991	Giulietta Mathiot	Freds Inc	3
992	Augy Duffin	Empack Spraytech Inc.	4
993	Amelia Creeber	Antigen Laboratories, Inc.	5
995	Briano Riby	SHISEIDO CO., LTD.	5
996	Belita Standrin	Unit Dose Services	4
999	Hadria Stranieri	REMEDYREPACK INC.	4
1000	Fayre Attack	Hyland's	2
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reviews (id, doctor_id, name, review, rating) FROM stdin;
224	425	Orange		4
225	714	i.s1		4
229	425	Orange		2
230	425	airflow 3		2
231	425	airflow 3		2
232	548	Orange		3
233	548	meal		1
234	927	i.s1		5
235	927	airflow 3		3
236	927	airflow 3		3
237	787	Andrew Buensalida		5
206	453	Orange		2
207	551	fdsa		3
108	1005	Orange		3
109	1005	airflow 3		4
\.


--
-- Name: doctors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.doctors_id_seq', 1023, true);


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reviews_id_seq', 237, true);


--
-- Name: doctors doctors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_doctor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_doctor_id_fkey FOREIGN KEY (doctor_id) REFERENCES public.doctors(id);


--
-- PostgreSQL database dump complete
--


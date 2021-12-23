"# PERN-STACK-YELP-CLONE"
https://www.youtube.com/watch?v=7qAXvOFhlDc

pg library automatically sticks .env database connection data into ./db/index.js new Pool()

dummy data from mockaroo

able to import sql data with psql --username=postgres yelp < C:\swe\postgres-react-mongo-express-yelp-restaurant-finder-sanjeev\PERN-STACK-YELP-CLONE\someresto.sql in the cmd

in the sql shell, \i C:\swe\postgres-react-mongo-express-yelp-restaurant-finder-sanjeev\PERN-STACK-YELP-CLONE\someresto.sql does not work because permission denied.
so did this \i 'C:/swe/postgres-react-mongo-express-yelp-restaurant-finder-sanjeev/PERN-STACK-YELP-CLONE/someresto.sql' and it worked. the regular slash and single quotes is key.

can import from csv in pgadmin, have to set binary path in preferences to where pgsql.exe is located. all or nothing.
if you want to copy everything, but not copy duplicates, just copy everything from sql file and paste into shell.

for infinite scroll, theres a js method by florin pop which looks at window scrollheight, clientheight, scrolltop. theres a react-infinite-scroll component library method by traversy where it takes in the props  
 <InfiniteScroll
dataLength={this.state.images.length}
next={this.fetchImages}
hasMore={true}
loader={<h4>Loading...</h4>} >
theres web dev simplified method with use react callback useref intersection observer method and putting the data in an array, theres griffith plain js intersection observer method and appending html element, theres weibenfalks react method which uses scrolltop scrollheight, clientheight, and onscroll method.
some methods keep track of what page theyre on, then they send it to the server.

cant use a placeholder in a parameterized query for asc desc.

if theres two setstates in one block, it re-renders the component twice.
re-rendering the component will assign a new event listener instance, even if its the same name. have to remove it each time in the useeffect.
have to use useref for isloading so it doesnt re-render twice, only once when offset is increased. a bug is since i trigger the fetch when scrolltop is 80% of scrollheight, the more data that is displayed means the end of the data is going to be farther and farther from the currently visible data. it cant be percentage, has to be fixed pixel value. for some reason this method stops fetching at 420 or 480 or 460, even though total data is 1000. some how its skipping every other fetch.
if scrolling too fast, total is around 980, sometimes 1000, but when scrollign moderately, its complete. i guess this means some fetches are being skipped, especially when disabling caching.

next time for rerendering right away the data after updating, maybe try web dev simplifieds method next time. i managed to make it work with my method, which is kind of hacky, had to make a needsUpdating boolean state in context, and when the user updates info or makes a review, this switches to true, so when history.pushed to the main page, it wont do the infinite scroll fetch which appends the new data. instead, it will do a reset fetch. the downside is the user wont end up where they left of, since the data is reset to the beginning. spent the whole day thinking about this. time to move on.

importing sql might have led to the sequence not being up to date, so when adding another doctor, it says pkey already taken. this is an easy fix, SELECT setval('doctors_id_seq', (SELECT max(id) FROM doctors));

multi page apps suck, theyre so tricky because re-renders after history.pushing, meaning another 20 doctors are added to the page even just updating. spa are better. to preven this, needs to have the fetch as a hook.

work around to pass data between multipage apps is history.push has a second parameter which can pass some data state.
still goes back to the start of the scroll after updating.

seems like useeffect is the way to do async stuff, based on what ive seen in instagram. the other way is through click listeners.

its very important where state is declared. if its too low down the tree, only the children will get rendered.

when inspecting facebook, when scrolling, just the new divs flash, not the old, so i thought they append the new elements. but upon inspecting my app which renders the whole list of data with every new element, just the new divs flash as well. so now i dont know if fb appends new elements or something else. also after inspecting my own app which, in the console, says it rerenders every entry, in the elements however, only new entries appear after scrolling.

order of stack trace of official fetch pattern from react, first body functions, then return, then useEffect, then functions in first setstate and suspend, rerender, state changes when it passes its usestate then continues rendering, then continue from first setstate in the fetch, then before going in second setstate, rerenders which resets the first state, passes first useState which sets it again, then passes second usestate which continues where it left off in the second setstate, then continues where it left off in the second usestate, renders, continues where it left off after the second setstate in the fetch, then same behavior if theres a third. maybe thats why they say nothing should be above the useStates, then continue from second set state. just the first setstate is different becauese it enters the setstate on the first round, not when it passes its usestate. SOOOOOO WWEEIRRDDD. whenever it goes into the setstate on the first try, when it rerenders, it just passes its usestate and updates and renders the whole thing, but if it stops before it enters its setstate, when it goes back to the top and passes its usestate, it gets transported back into its setstate. so returning either goes to the top or to its usestate. basically, first render, it doesnt pass !isLoading nor data, second render it passes !isLoading but no data to render, third it passes both and renders. thats why when rendering something, always have an if isloading check to prevent redundant rendering. if you nest a setstate in a setstate, theres an extra render. it actually doesnt return until all the setstates have been changed. very weird, even if items have a value, and its mapping, no output. not even in the console log of the child component. mysterious. just stick to the official recommended pattern.

can update state in two ways, directly like setCount(count+1) or through a function like setCount(count=>count+1). the official guideline for fetch uses the direct approach. using this approach, the second setstate doesnt jump back inside the second setstate after passing its usestate because theres nothing to jump back into. other than that, its the same as direct approach. if setstate is initiated by a click event instead of useeffect, it doesnt return to the top, it just goes to the next line.

shouldnt call setstate in the body of a component. cant call hook like useSomething in useEffect

even if context changed in one route, it didnt rerender another route using that same context.

infinite scroll component works,takes exactly 45 seconds to load 950 records. baseically it prefetches all the data, then when you scroll down, it appends to the render list. for some reason all of the previous records gets rerendered. probable due to the map function. the scroll height method takes the same time, assuming both are on fast internet. i guess theres a trade off of speed and memory. and if the user waits in the beginning vs during. for preload, takes only 30 seconds. for slower internet, 2 minutes for the scroll height method. bottle neck is in the fetch in the individual. knowing when to fetch is important. also try react virtualize or react window. or lazy load with react suspense. conditionally rendered review doctor component and went from 45 seconds to 35 seconds. conditionally rendered update component and went from 35 to 25 seconds.
didnt even use suspense or lazy.

to get top doctors with most reviews
select 
    doctors.id, 
    doctors.name , 
    count(doctors.id) 
from 
    doctors 
inner join 
    reviews 
    on doctors.id = doctor_id 
group by 
    doctors.id 
order by
    count 
desc;

have to change axios to a different path.

ss -tnlp | grep "node /" to see what ports pm2 processes are running on.

make sure when copy pasting stuff from vs code to ec2 connect, paste it in the url first, then copy from there and paste.

to install nginx https://ubuntu.com/tutorials/install-and-configure-nginx#2-installing-nginx
test by going to http (not https) of your ip address
to configure nginx to proxy to react, https://www.sitepoint.com/configuring-nginx-ssl-node-js/

sudo nano /etc/nginx/sites-available/doctordb.anhonestobserver.com.conf
have to do the sim link thing sudo ln -s /etc/nginx/sites-available/doctordb.anhonestobserver.com.conf /etc/nginx/sites-enabled/
sudo systemctl reload nginx to make sure it's working
because certbot was previously installed, it redirected books.anhonest to doctordb.anhonest. to fix, just run sudo certbot --nginx again to expand the certificates. dont be alarmed if the pem name is still doctordb. it still works.

server {
listen 80;
listen [::]:80;

root /home/ubuntu/doctordb/client/build;
index index.html index.htm index.nginx-debian.html;
server_name doctordb.anhonestobserver.com www.doctordb.anhonestobserver.com;

location / {
try_files $uri /index.html;
}

location /api { 
proxy_pass http://localhost:3001/api;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_cache_bypass $http_upgrade;
}
}
have to do the sim link thing sudo ln -s /etc/nginx/sites-available/books.anhonestobserver.com.conf /etc/nginx/sites-enabled/

this works. no need for pm2 for react. clients can access through doctordb.anhonestobserver.com. couldnt get anhonestobserver.com/doctordb to work though.
important commands:
sudo systemctl status nginx
sudo nano /etc/nginx/sites-available/doctordb.anhonestobserver.com.conf
sudo nginx -t  //to check if its alright
sudo service nginx restart
now can go to ip address without the :3000 at the end.

to install postgres on ubuntu, postgres automatically creates a user called postgres.
switch to that user with sudo -i -u postgres
now run psql
to exit out of postgres, \q, which will .. just watch this to install and import data into postgres
 https://www.youtube.com/watch?v=NjYsXuSBZ5U

then manually create the .env in the server directory so node can log into psql.
could probably also do the global .env method. remember to delete and start the pm2 after this.

seems that react build folder already contains node_modules

npm ci to install exactly the same version
npm i --prefer-offline to not install if it's in cache, this doesnt work with npm ci
npm i --production to not install devdependencies, this works with npm ci
use this one npm i --prefer-offline --production for the server

workflow:
since couldnt build during the deploy, have to build locally, then push to github. code pipeline should autodeploy to ec2. the react-scripts folder in the node_modules is empty, so i tried npm i react-scripts, but ends up crashing the instance. 
during development, will be using the local postgres db.

pm2 is weird. if in the ~ folder, doing pm2 start /home/ubuntu/doctordb/server/server.js says it worked and is online, but when i go to the site, it doesnt work. but if in the doctordb/server folder, it works.

in the code deploy scripts, dont need to stop and start pm2 because if watch is enabled, pm2 automatically restarts when there are changes made from code pipeline.

to get ssl https certified, https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx
dont even need to go to the aws certificate manager. just route 53.

because i lost my pem so i cant ssh. had to https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html basically ssh-keygen -m PEM in cmd, then import it in aws console key pair, then sudo nano /.ssh/authorized_keys and include the rsa. now open cmd and ssh -i doc3.pem ubuntu@54.219.56.20

now trying typescript
https://www.sitepoint.com/how-to-migrate-a-react-app-to-typescript/
not sure if i should do next step in root root, or client, so did root root. this was wrong. should be within client folder, and within server folder.
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
tsc --init in root directory, the directory that contains both client and server.
tsc -w to auto compile on save
now even subdirectory tsx files will compile to js
note it should be tsx, not ts
not that if npm run start starts with jsx, then you change jsx to js, it will break. have to restart.
tsconfig default excludes node_modules
gave up. too problematic. maybe easier to start with tsx in the beginning of the project, not converting.


now migrating to ec2 t2 micro:

pm2 stuff:
npm i pm2 -g

ss -tnlp | grep "node /" to see what ports pm2 processes are running on.

to run server, with auto restart when files change, put --watch,
pm2 start server.js --watch --name doctordb

pm2 restart to reload the .env

then to auto restart when instance reboots,
pm2 startup
then copy paste what they tell you to
pm2 save

to check logs , pm2 logs heat --timestamp


to install postgres on ubuntu:
first dump local database, meaning make a copy, 
pg_dump <dbname> > <outfile>
https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart
sudo apt install postgresql postgresql-contrib
to switch to postgres user,
sudo -i -u postgres
now can access psql
psql
-- change password
alter user postgres password '<myPassword>';
now exit out of postgres
\q
while inside postgres user (not psql),
create database with createdb -T template0 doctordb
then switch to main user with exit
then in ubuntu user, in the folder where doctordb.pgsql is,
import dummy data dump
sudo -u postgres psql doctordb < 'doctordb.pgsql'
should see create tables and alter tables


turn on autosave when working on styling
===========================================
now making bootstrap responsive
bootstrap has 12 columns
columns have to be contained in a row, like this:
        <div class="container">
            <div class="row">
                <div class="col">column</div>
                <div class="col">column</div>
                <div class="col">column</div>
            </div>
        </div>
only columns may be immediate children of fows.
if you put a dash then a number after the col, it represents how many columns they take up out of 12.
if the total is less than 12, there's space left. 
if it's more, they start to stack. basically the number is what proportion they own, not really the absolute size.
            <d class="row">
                <div class="col-4">column</div>
                <div class="col-6">column</div>
                <div class="col-2">column</div>
            </d>
can set breakpoints like sm md lg. these are the break points, so if the width starts to get thinner than the sm break point, that's when they stack and become full width. when the column stacks, it takes up the whole with of the column.
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
lg = 1200px for desktops, md = 992px for small laptops, sm = 768px for tablets, xs = 768px for phones. xl for 24inch monitors. 
            <div class="row">
                <div class="col-sm">column</div>
                <div class="col-sm">column</div>
            </div>
can also combine word sizes with number sizes, so this will initially start with 3 columns of different sizes, then when each width reaches sm, they stack.
           <div class="row">
                <div class="col-sm-4">column</div>
                <div class="col-sm-6">column</div>
                <div class="col-sm-2">column</div>
            </div>
no gutters on the row removes the padding in the columns. this will make the total width a little skinnier.
            <div class="row no-gutters">
                <div class="col">column</div>
                <div class="col">column</div>
            </div>
offset creates a gap between the columns, so below would move the second column, that has a size of 2 columns, to the right by 4 columns
            <div class="row">
                <div class="col-sm-6">column</div>
                <div class="col-sm-2 offset-sm-4">column</div>
            </div>
if you have 4 columns, and want it in 1 row when the screen is wide, then have 2 columns and 2 rows when the screen is small, can mix and match. startin from wide, each column will take up 3/12ths the width, then when the size reaches md it will stack and now each column will have a width of 6/12th. then when it reacges sm, it will stack into 1 column.
            <div class="row">
                <div class="col-sm-6 col-md-3">column</div>
                <div class="col-sm-6 col-md-3">column</div>
                <div class="col-sm-6 col-md-3">column</div>
                <div class="col-sm-6 col-md-3">column</div>
            </div>


nav bars=======================================================================
navbar makes it bigger, navbar-light makes the font dark instead of blue, bg-light makes the background light grey instead of white, navbar-brand makes font bigger. navbar-expand-lg makes nav-links spread out from the burger icon. fixed-top sets the position to fixed.
        <nav class="navbar navbar-light bg-light navbar-expand-lg fixed-top">
            <a href="#" class="navbar-brand">My Website</a>
            <!-- navbar-toggler gives the button the function of opening and closing the navlinks, together with collapse. need to give it a target which points to the id of the div that contains the ul of the navlinks.   -->
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <!-- this is the burger icon -->
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
            <!-- ml-auto is margin left auto, to push navlinks to the right -->
                <ul class="navbar-nav ml-auto">
                    <li class="navbar-item">
                        <a href="#" class="nav-link">Homepage</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="nav-link">Blog</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="nav-link">About Me</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

modals aka pop-up boxes that darken the background========================================================
<!-- data-toggle="modal" gives the button the function to toggle a target modal.  -->
 <button class="btn btn-primary" data-toggle="modal" data-target="#myModal">Launch Modal</button>
        <!-- fade gives it a transition when opening -->
        <div class="modal fade" id="myModal">
        <!-- modal-dialog, content, header, body, footer gives the modal a structure -->
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Hello World</h5>
                        <!-- close button on top right -->
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

form ========================================================
        <form>
        <!-- probably needs an action in the form tag -->
            <div class="form-group row">
            <!-- col-sm-3 means it takes up 3 columns, and when it gets smaller than a sm, it collapses and becomes one column full width -->
                <label class="col-sm-3 col-form-label" for="email">Email Address</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" id="email">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="password">Password</label>
                <div class="col-sm-9">
                    <input type="password" class="form-control" id="password">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-9 offset-sm-3">
                    <button type="submit" class="btn btn-primary">Login Now</button>
                </div>
            </div>
        </form>

list group=============================================================
            <ul class="list-group">
            <!-- these are not clickable. these span the whole screen -->
                <li class="list-group-item">
                    Homepage
                </li>
                <li class="list-group-item">
                    Homepage
                </li>
                <li class="list-group-item">
                    Homepage
                </li>
            </ul>

for a clickable list
            <div class="list-group">
            <!-- list-group-item-action makes the font dark -->
                <a href="#" class="list-group-item list-group-item-action">
                    Homepage
                </a>
                <!-- d-flex makes it display:flex. now can justify-content-between which makes space between -->
                <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    Notifications
                    <!-- primary makes it blue. pill makes it border-radius circular -->
                    <span class="badge badge-primary badge-pill">3</span>
                </a>
                <!-- active makes the item highlighted blue -->
                <a href="#" class="list-group-item list-group-item-action active">
                    Blog
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    Contact
                </a>
            </div>
card ===========================================================
<div class="card">
<!-- card-img-top rounds the top corners but squares the bottom corners -->
                <img class="card-img-top" alt="Card header image" src="https://placeimg.com/640/480/nature">
                <!-- card-body creates padding -->
                <div class="card-body">
                    <h5 class="card-title">Card Title</h5>
                    <p class="card-text">Lorem ipsum dolor</p>
                </div>
                <!-- list-group-flush squares the corners -->
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Item One</li>
                    <li class="list-group-item">Item One</li>
                    <li class="list-group-item">Item One</li>
                    <li class="list-group-item">Item One</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="btn btn-primary">Button One</a>
                    <!-- default makes background white -->
                    <a href="#" class="btn btn-default">Button Two</a>
                </div>
            </div>

tables =============================================
table-dark makes the table dark
table-striped makes table striped
table-bordered makes vertical lines
table-primary changes the color of the row to blue
table-hover highlights row on hover
table-sm makes it more compact

<table class="table table-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-primary">
                        <td>01</td>
                        <td>Neil Rowe</td>
                        <td>18</td>
                        <td>United Kingdom</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>John Doe</td>
                        <td>33</td>
                        <td>Australia</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>David Smith</td>
                        <td>25</td>
                        <td>Canada</td>
                    </tr>
                </tbody>
            </table>

alerts            ================================================================
            <div class="alert alert-danger">
            <!-- alerts are little messages that can close -->
                <h4 class="alert-heading">Warning!</h4>
                <hr />
                <p class="mb-0">Something really is not right!</p>
            </div>


navigation options =======================================================
            <ul class="nav nav-tabs">
            <!-- nav-tabs makes it look like those folders with the labels on top -->
                <li class="nav-item">
                    <a href="#" class="nav-link active">Item One</a>
                </li>
                <li class="nav-item">
                <!-- this is a drop down nav button -->
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Item Two</a>
                    <div class="dropdown-menu">
                        <a href="#" class="dropdown-item">Dropdown 1</a>
                        <a href="#" class="dropdown-item">Dropdown 2</a>
                        <a href="#" class="dropdown-item">Dropdown 3</a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">Dropdown 4</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Item Three</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link disabled">Item Four</a>
                </li>
            </ul>


            ================================================
now working on the action doctordb responsive bootstrap
buggy the width of the body in mobile device mode in chrome. sometimes the width isnt wide enough. so have to not use device mode and just drag the screen size manually.



============================================================================================
-- open pg shell
\l lists all the databases

-- change password
alter user postgres password '<myPassword>';

-- to create database
CREATE DATABASE heat;

-- switch to new database 
\c heat

-- display tables
\d

--display table columns
\d <table name>

-- this is to create the table. have users in the future, but for now just heats
create table user (
    id bigserial not null primary key,
    username varchar(50) not null,
    password varchar(50) not null,
);

CREATE TABLE heats (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    -- user_id BIGINT NOT NULL REFERENCES user(id),
    title VARCHAR(50) NOT NULL,
    body VARCHAR(255) NOT NULL,
    rank INT NOT NULL check( rank > 0 )
);

-- populate table with some data
insert into heats (title,body,rank) values ('First run of the app', 'This is my first heat. I enjoyed it very much.', '1');
insert into heats (title,body,rank) values ('Side stitches', 'I got side stitches.', '9'); 

-- check to see if data is in
select * from heats;

-- exit out of database
\q

-- exit out of regular system user
exit

select *
from doctors
    left join(
        select doctor_id,
            count(*),
            TRUNC(AVG(rating), 1) as average_rating
        from reviews
        group by doctor_id
    ) reviews on doctors.id = reviews.doctor_id;


    ?


============================================================================================
fixing order by. turns out, locally it has a different collation then on remote server.
to check, 
show lc_collate;
have to do,
ORDER BY name COLLATE "en_US"
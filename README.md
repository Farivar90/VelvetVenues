<p align="center">
  <img src="app/assets/hellowiz.gif" alt="Animated GIF">
</p>

<div align="center" ; "font-size: "large" >
  <a href="https://velvetvenues.onrender.com/"; "font-size: "large">Live on: VelvetVenues</a>
</div>





## Overview

"Where Opulence Meets Elegance" - VelvetVenues, the epitome of exclusivity in real estate. Unleash your refined taste and explore listings over $20 million, tailored to your luxurious lifestyle.

VelvetVenues is a real estate application that caters exclusively to high-end properties. It allows users to browse, search, and interact with listings over $20 million.

### © 2023 by Farivar Amiri. All rights reserved.



## Installation
Follow these steps to get VelvetVenues up and running on your local machine:

### Prerequisites
Ensure you have the following installed:
* Ruby
* PostgreSQL
* Node.js

### Clone the Repository
1. Open a terminal and run:
   ```bash
   git clone https://github.com/https:/Farivar90/VelvetVenues.git
2. Navigate to the directory:
   ```bash
   cd VelvetVenues
### Set Up the Backend
1. Install the required Ruby gems:
   ```bash
   bundle install
2. Set up the database:
   ```bash
   rails db:create
   rails db:migrate
3. Start the Rails server:
   ```bash
   rails server
### Set Up the Frontend
1. Install the required Node modules:
   ```bash
   npm install
2. Start the React development server:
   ```bash
   npm start
### Accessing the Application
Open your browser and navigate to `http://localhost:3000/`
* You should now see the VelvetVenues application running locally!

## Technologies

* Ruby on Rails
* PostgreSQL
* React
* Redux
* AWS
* Google map


## Features

### `User Authentication and Profile Management`
Sign in and registration have been fortified with stringent validation checks to ensure a secure user experience.
#### `Sign In and Registration:`
<img width="300" alt="login" src="app/assets/login.png">

<img width="300" alt="reg" src="app/assets/registration.png">

#### `User Profile, Edit, and Delete:`

<img width="300" alt="user" src="app/assets/userp.png">

<img width="300" alt="usered" src="app/assets/usered.png">

### `Messaging System`
Incorporate an inbox feature where users can send and receive messages, facilitating communication between buyers and sellers.
#### `Inbox and Messaging:`

<img width="300" alt="inbox" src="app/assets/inbox.png">

<img width="300" alt="sr" src="app/assets/sr.png">

### `Property Listings and Management`
A comprehensive display of luxury properties, allowing users to create, edit, and delete their listings.

#### `Display of Properties:`
<img width="300" alt="list" src="app/assets/listshow.png">

#### `Search Properties on Map:`

<img width="300" alt="map" src="app/assets/searchmap.png">


#### `Detailed Property Listings:`

<img width="300" alt="detail1" src="app/assets/detail1.png">
<img width="300" alt="detail2" src="app/assets/detail2.png">

#### `Listing Creation, Edition, and Deletion:`

<img width="300" alt="lc0" src="app/assets/lc0.png">
<img width="300" alt="lc1" src="app/assets/lc1.png">
<img width="300" alt="lc2" src="app/assets/lc2.png">

### `Advanced Search Features:`
Users can search properties, or other users by their username or full name.

<img width="300" alt="s0" src="app/assets/s0.png">
<img width="300" alt="s1" src="app/assets/s1.png">
<img width="300" alt="s2" src="app/assets/s2.png">

### `User Interactions`
Users can mark their favorite properties and engage in a forum, promoting a community-driven experience.

#### `Favorites Management:`

<img width="300" alt="f1" src="app/assets/f1.png">
<img width="300" alt="f2" src="app/assets/f2.png">

### `Forum and Discussion Threads:`

<img width="300" alt="fr1" src="app/assets/fr1.png">
<img width="300" alt="fr2" src="app/assets/fr2.png">
<img width="300" alt="fr3" src="app/assets/fr3.png">
<img width="300" alt="fr4" src="app/assets/fr4.png">

### `Additional Features`
#### About Me with Dynamic Background: Provides a more personalized touch.


<img width="300" alt="about" src="app/assets/about.png">

#### Auto Logout:
For enhanced user security, ensuring session timeouts after prolonged inactivity.
#### Responsive Design:
Built with a mobile-first approach, the platform ensures optimal display and interaction across various screen sizes, including mobile devices and accessibility settings.


## Show some challenging codes
### Advance search
```ruby
class Api::ListingsController < ApplicationController

    before_action :find_listing, only: [:show, :edit, :update, :destroy]

    def index
        @listings = Listing.with_attached_photos.all
        if params[:search]
            @listings = Listing.where("location ILIKE ?", "%#{params[:search]}%")
        end
        if params[:min_price] && params[:min_price] != ''
            @listings = @listings.where("price >= ?", params[:min_price])
        end
        if params[:max_price] && params[:max_price] != ''
            @listings = @listings.where("price <= ?", params[:max_price])
        end
        if params[:min_bedrooms] && params[:min_bedrooms] != ''
            @listings = @listings.where("bedrooms >= ?", params[:min_bedrooms])
        end
        if params[:max_bedrooms] && params[:max_bedrooms] != ''
            @listings = @listings.where("bedrooms <= ?", params[:max_bedrooms])
        end
        if params[:min_baths] && params[:min_baths] != ''
            @listings = @listings.where("full_baths >= ?", params[:min_baths])
        end
        if params[:max_baths] && params[:max_baths] != ''
            @listings = @listings.where("full_baths <= ?", params[:max_baths])
        end
        if params[:min_garage] && params[:min_garage] != ''
            @listings = @listings.where("garage >= ?", params[:min_garage])
        end
        if params[:max_garage] && params[:max_garage] != ''
            @listings = @listings.where("garage <= ?", params[:max_garage])
        end
        if params[:min_lot_size] && params[:min_lot_size] != ''
            @listings = @listings.where("lot_size >= ?", params[:min_lot_size])
        end
        if params[:max_lot_size] && params[:max_lot_size] != ''
            @listings = @listings.where("lot_size <= ?", params[:max_lot_size])
        end
        if params[:min_living_area] && params[:min_living_area] != ''
            @listings = @listings.where("living_area >= ?", params[:min_living_area])
        end
        if params[:max_living_area] && params[:max_living_area] != ''
            @listings = @listings.where("living_area <= ?", params[:max_living_area])
        end
        if params[:min_built] && params[:min_built] != ''
            @listings = @listings.where("built >= ?", params[:min_built])
        end
        if params[:max_built] && params[:max_built] != ''
            @listings = @listings.where("built <= ?", params[:max_built])
        end
        if params[:amenities] && params[:amenities] != ''
            amenity_ids = params[:amenities].split(',')
            @listings = @listings.joins(:amenities).where('amenities.id IN (?)', amenity_ids)
        end        
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
        render :show
    end

    def create
        @listing = Listing.new(listing_params)
        @listing.photos.attach(params[:listing][:photos])
        amenities = params[:amenities]
        amenities.split(',').each do |amenity|
            @listing.amenities << Amenity.where(id: amenity)
        end
        if @listing.save!
            render :show
        else
            render json: {errors: @listing.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def edit
        @listing = Listing.find(params[:id])
    end

    def update
        @listing = Listing.find(params[:id])
        @listing.photos.attach(params[:listing][:photos])
        @listing.listings_amenities.destroy_all
        amenities = params[:amenities]
        amenities.split(',').each do |amenity|
            @listing.amenities << Amenity.where(id: amenity)
        end
        if @listing.update(listing_params)
            render :show
        else
            render json: {errors: @listing.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        @listing = Listing.find(params[:id])
        if @listing.destroy
            render json: { message: "Listing deleted" }
        else
            render json: { error: "Error deleting listing" }, status: :unprocessable_entity
        end
    end

    private

    def find_listing
        @listing = Listing.find_by(id: params[:id])
        unless @listing
            render json: {error: "Listing not found"}, status: :not_found
        end
    end

    def listing_params
        params.require(:listing).permit(:user_id, :price, :lot_size,:living_area, :location, :longitude, :latitude, :bedrooms, :full_baths, :half_baths, :garage, :built, :description, :contact_info, photos: [])
    end
end
```
### Show inbox different way in frontend
```javascript
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link, useParams } from 'react-router-dom';
import { fetchMessages } from '../../store/messages';
import NewConversation from './NewConversation';
import './Inbox.css';

function Inbox() {
  const currentUser = useSelector((state) => state.session.user);
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
      if (currentUser) {
          dispatch(fetchMessages());
        }
    }, [currentUser, dispatch]);
    
    if (!currentUser) {
        return <Redirect to={`/`} />;
    }
    
    const groupedMessages = {};
    
    Object.values(messages).forEach(message => {
        const otherUserName = currentUser === message.senderId ? message.receiverName : message.senderName;
        const otherUserId = currentUser === message.senderId ? message.receiverId : message.senderId;
        
        if (groupedMessages[otherUserId]) {
            groupedMessages[otherUserId].messages.push(message);
        } else {
            groupedMessages[otherUserId] = {
                userName: otherUserName,
                messages: [message]
            };
        }
    });
    
    return (
        <div className="inbox-container">
        <button className="new-conversation-button" onClick={() => window.location.href='/start-new-conversation'}>+</button>
        <h1 className="inbox-title">Your Messages</h1>
        <ul className="message-list">
            {Object.entries(groupedMessages).map(([userId, data]) => {
                const lastMessage = data.messages[data.messages.length - 1].content;
                
                return (
                    <li key={userId} className="message-item">
                        {/* <Link to={`/users/${userId}`} className="mun"> */}
                        {/* </Link> */}
                        <Link to={`/conversation/${data.userName}/${userId}`} className="message-link">
                            <h2 className="user-name">{data.userName}</h2>
                            <p className="last-message">Last Message: {lastMessage}</p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    </div>
  );
}

export default Inbox;

**register**
----
  link to register page

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   ```
   email = req.body.email
   password = req.body.password
   ```

* **Data Params**

  ```
  JSON
        {
            "email":"string",
            "password":"string"
        }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** ```
    json
        {
        "data": [
            {
                "id": 2,
                "email":"user@mail.com
                "createdAt": "2020-08-31T14:21:01.684Z",
                "updatedAt": "2020-08-31T14:21:01.684Z"
            }
        ]
}```
 
* **Error Response:**

  * **Code:** 500 internal server error <br />
    **Content:** `{ error : "internal server error" }`

**login**
----
  link to login page

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   ```
   email = req.body.email
   password = req.body.password

   
   ```

* **Data Params**

  ```
  JSON
        {
            "id":"integer
            "email":"string",
            "password":"string"
        }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** ```
    json
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJyaWt5QG1haWwuY29tIiwiaWF0IjoxNTk5MDA3NDM0fQ.MWzeDVPsHuZmiN46I8fc027_Pz8H5gxZK5mPt0n5WKo"
        
        }
```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "DATA NOT FOUND" }`

    OR
  * **Code:** 401 FAILED AUTHENTICATE <br />
    **Content:** `{ error : "FAILED AUTHENTICATE" }`


**Google sign**
----
  link to google sign in

* **URL**

  /googleSign

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   ```
   {
       id_token : req.body.id_token
   }
   ```

* **Data Params**

  ```
  JSON
        {
            "id":"integer"
            "email":"string",
            "password":"string"
        }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** ```
    json
        {
        "data": [
            {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJyaWt5QG1haWwuY29tIiwiaWF0IjoxNTk5MDA3NDM0fQ.MWzeDVPsHuZmiN46I8fc027_Pz8H5gxZK5mPt0n5WKo"
            }
        ]
}```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "DATA NOT FOUND" }`

    OR
  * **Code:** 401 FAILED AUTHENTICATE <br />
    **Content:** `{ error : "FAILED AUTHENTICATE" }`

** random activity**
----
  generate random activity

* **URL**

  /bored

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   ```
   NONE
   ```

* **Data Params**

  ```
    response.data
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** ```
    json
        {
            "activity": "Volunteer at a local animal shelter",
            "type": "charity",
            "participants": 1,
            "price": 0.1,
            "link": "",
            "key": "1382389",
            "accessibility": 0.5
        }
```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "DATA NOT FOUND" }`

    OR
  * **Code:** 401 FAILED AUTHENTICATE <br />
    **Content:** `{ error : "FAILED AUTHENTICATE" }`


** Jokes**
----
  generate jokes

* **URL**

  /jokes

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   ```
   none
   ```

* **Data Params**

  ```
    json {
        "id" :"integer",
        "type": "string",
        "setup":"string",
        "punchline":"string"
    }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** ```
    json
        {
            "id": 14,
            "type": "knock-knock",
            "setup": "Knock knock. \n Who's there? \n Little old lady. \n Little old lady who?",
            "punchline": "I didn't know you could yodel!"
        }
```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "DATA NOT FOUND" }`

    OR
  * **Code:** 401 FAILED AUTHENTICATE <br />
    **Content:** `{ error : "FAILED AUTHENTICATE" }`

** Giphy **
----
  generate giphy

* **URL**

  /giphy

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   ```
   none
   ```

* **Data Params**

  ```
    json {
        "id" :"integer",
        "type": "string",
        "setup":"string",
        "punchline":"string"
    }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** ```
    json
        {
            "data": [
        {
            "type": "gif",
            "id": "10UKthphvo1Axq",
            "url": "https://giphy.com/gifs/retro-fiend-retrofiend-elvira-10UKthphvo1Axq",
            "slug": "retro-fiend-retrofiend-elvira-10UKthphvo1Axq",
            "bitly_gif_url": "http://gph.is/1qS72AD",
            "bitly_url": "http://gph.is/1qS72AD",
            "embed_url": "https://giphy.com/embed/10UKthphvo1Axq",
            "username": "retro-fiend",
            "source": "http://retro-fiend.com/post/98706111519",
            "title": "elvira mistress of the dark halloween GIF by RETRO-FIEND",
            "rating": "g",
            "content_url": "http://retro-fiend.com",
            "tags": [],
            "featured_tags": [],
            "user_tags": [],
            "source_tld": "retro-fiend.com",
            "source_post_url": "http://retro-fiend.com/post/98706111519",
            "is_sticker": 0,
            "import_datetime": "2014-09-29 05:39:38",
            "trending_datetime": "2014-10-04 18:20:52",
            "images": {
                "original": {
                    "height": "413",
                    "width": "550",
                    "size": "835769",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/giphy.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=giphy.gif",
                    "mp4_size": "201435",
                    "mp4": "https://media1.giphy.com/media/10UKthphvo1Axq/giphy.mp4?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=giphy.mp4",
                    "webp_size": "263996",
                    "webp": "https://media1.giphy.com/media/10UKthphvo1Axq/giphy.webp?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=giphy.webp",
                    "frames": "6",
                    "hash": "e82f672726e01b5b95c15b78dd10c437"
                },
                "downsized": {
                    "height": "413",
                    "width": "550",
                    "size": "835769",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/giphy.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=giphy.gif"
                },
                "downsized_large": {
                    "height": "413",
                    "width": "550",
                    "size": "835769",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/giphy.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=giphy.gif"
                },
                "downsized_medium": {
                    "height": "413",
                    "width": "550",
                    "size": "835769",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/giphy.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=giphy.gif"
                },
                "downsized_small": {
                    "height": "310",
                    "width": "413",
                    "mp4_size": "41674",
                    "mp4": "https://media1.giphy.com/media/10UKthphvo1Axq/giphy-downsized-small.mp4?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=giphy-downsized-small.mp4"
                },
                "downsized_still": {
                    "height": "413",
                    "width": "550",
                    "size": "835769",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/giphy_s.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=giphy_s.gif"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "266",
                    "size": "143714",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/200.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=200.gif",
                    "mp4_size": "34839",
                    "mp4": "https://media1.giphy.com/media/10UKthphvo1Axq/200.mp4?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=200.mp4",
                    "webp_size": "45618",
                    "webp": "https://media1.giphy.com/media/10UKthphvo1Axq/200.webp?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "266",
                    "size": "143714",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/200_d.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=200_d.gif",
                    "webp_size": "69090",
                    "webp": "https://media1.giphy.com/media/10UKthphvo1Axq/200_d.webp?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "133",
                    "size": "44032",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/100.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=100.gif",
                    "mp4_size": "10540",
                    "mp4": "https://media1.giphy.com/media/10UKthphvo1Axq/100.mp4?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=100.mp4",
                    "webp_size": "17738",
                    "webp": "https://media1.giphy.com/media/10UKthphvo1Axq/100.webp?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=100.webp"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "width": "133",
                    "size": "8400",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/100_s.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=100_s.gif"
                },
                "fixed_height_still": {
                    "height": "200",
                    "width": "266",
                    "size": "24525",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/200_s.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=200_s.gif"
                },
                "fixed_width": {
                    "height": "150",
                    "width": "200",
                    "size": "86593",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/200w.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=200w.gif",
                    "mp4_size": "21347",
                    "mp4": "https://media1.giphy.com/media/10UKthphvo1Axq/200w.mp4?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=200w.mp4",
                    "webp_size": "30762",
                    "webp": "https://media1.giphy.com/media/10UKthphvo1Axq/200w.webp?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "150",
                    "width": "200",
                    "size": "86593",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/200w_d.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=200w_d.gif",
                    "webp_size": "43046",
                    "webp": "https://media1.giphy.com/media/10UKthphvo1Axq/200w_d.webp?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "75",
                    "width": "100",
                    "size": "26948",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/100w.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=100w.gif",
                    "mp4_size": "6951",
                    "mp4": "https://media1.giphy.com/media/10UKthphvo1Axq/100w.mp4?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=100w.mp4",
                    "webp_size": "11764",
                    "webp": "https://media1.giphy.com/media/10UKthphvo1Axq/100w.webp?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=100w.webp"
                },
                "fixed_width_small_still": {
                    "height": "75",
                    "width": "100",
                    "size": "5136",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/100w_s.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=100w_s.gif"
                },
                "fixed_width_still": {
                    "height": "150",
                    "width": "200",
                    "size": "15121",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/200w_s.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=200w_s.gif"
                },
                "looping": {
                    "mp4_size": "3379879",
                    "mp4": "https://media1.giphy.com/media/10UKthphvo1Axq/giphy-loop.mp4?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=giphy-loop.mp4"
                },
                "original_still": {
                    "height": "413",
                    "width": "550",
                    "size": "140435",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/giphy_s.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=giphy_s.gif"
                },
                "original_mp4": {
                    "height": "360",
                    "width": "480",
                    "mp4_size": "201435",
                    "mp4": "https://media1.giphy.com/media/10UKthphvo1Axq/giphy.mp4?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=giphy.mp4"
                },
                "preview": {
                    "height": "164",
                    "width": "218",
                    "mp4_size": "13015",
                    "mp4": "https://media1.giphy.com/media/10UKthphvo1Axq/giphy-preview.mp4?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=giphy-preview.mp4"
                },
                "preview_gif": {
                    "height": "80",
                    "width": "107",
                    "size": "49826",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/giphy-preview.gif?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=giphy-preview.gif"
                },
                "preview_webp": {
                    "height": "128",
                    "width": "170",
                    "size": "23714",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/giphy-preview.webp?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=giphy-preview.webp"
                },
                "480w_still": {
                    "height": "360",
                    "width": "480",
                    "size": "835769",
                    "url": "https://media1.giphy.com/media/10UKthphvo1Axq/480w_s.jpg?cid=248ed823qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&rid=480w_s.jpg"
                }
            },
            "user": {
                "avatar_url": "https://media3.giphy.com/avatars/retro-fiend/NW824AJbEH4E.gif",
                "banner_image": "https://media3.giphy.com/headers/retro-fiend/xUnOVeJpVbkX.gif",
                "banner_url": "https://media3.giphy.com/headers/retro-fiend/xUnOVeJpVbkX.gif",
                "profile_url": "https://giphy.com/retro-fiend/",
                "username": "retro-fiend",
                "display_name": "RETRO-FIEND",
                "is_verified": true
            },
            "analytics_response_payload": "e=Z2lmX2lkPTEwVUt0aHBodm8xQXhxJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9MjQ4ZWQ4MjNxZGQ1OG5mZjNta3c3NmE3dTFtczMzZDhyZzg1ZHVlN29namY3bTJh",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&event_type=GIF_SEARCH&gif_id=10UKthphvo1Axq&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&event_type=GIF_SEARCH&gif_id=10UKthphvo1Axq&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=qdd58nff3mkw76a7u1ms33d8rg85due7ogjf7m2a&event_type=GIF_SEARCH&gif_id=10UKthphvo1Axq&action_type=SENT"
                }
            }
        }
    ]
        }
```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "DATA NOT FOUND" }`

    OR
  * **Code:** 401 FAILED AUTHENTICATE <br />
    **Content:** `{ error : "FAILED AUTHENTICATE" }`
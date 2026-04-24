# Benjamin Lukens DB Schema 

# Core data structure 
Each user will have their own account that is stored within the DB. 
Each user's account will have saved song playlists and app settings that automatically
apply when they log in. 
Users will be able to add, update, and delete their account. 
Users should not be able to delete or update other accounts. 
Once logged in, users will be able to add/delete songs and playlists saved. 
 
Therefore: 
Accounts: Create - Users will be able to create their own account 
          Read - for privacy, accounts will not be shown at the login page, just the credentials fields
          Update - Users will be able to update their personal information 
          Delete - Users will be able to delete their own account and deactivate the login credentials

Music: Create - Users will be able to create their own account specific playlists 
       Read - Playlists (and songs) will be listed in each field
       Update - Users will be able to add songs to playlists 
       Delete - Users will be able to remove songs from their playlist, and delete playlists entirely.

musicApp.db
Table: Accounts
Columns: id, userName, password
JSON format 
{ 
    id: int,
    userName: string,
    password: string,
}

Table Playlist: 
Columns: id, name, userId
JSON format 
{
    id: int,
    name: string,
    userId: string,
}

Table PlaylistSongs: 
Columns: id, playlistId, videoId, title
JSON format 
{
    id: int,
    playlistId: int,
    videoId: int,
    title: string,
}

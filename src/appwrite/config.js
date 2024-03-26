// import conf from "../conf/conf.js"
// import { Client, Databases, Storage, Query} from "appwrite";

// export class Service{
//     client =  new Client()
//     databases;
//     bucket;

//     constructor(){
//         this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
//         this.databases = new Databases(this.client)
//         this.bucket = new Storage(this.client)
//    }

//    async getPost(slug){
//      try{
//         return await this.databases.getDocument(
//             conf.appwriteDatabaseId,
//             conf.appwriteCollectionId,
//             slug)
//      } catch(error){
//         console.log("Appwrite service :: getPost() ::", error);
//         return false
//      }
//    }

//    async getPosts(queries = [Query.equal("status", "active")]){
//         try{
//             this.databases.listDocuments(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 queries)
//         }catch(error){
//             console.log("Appwrite service :: getPosts() ::", error);
//             return false
//         }
//    }
// }
 

// import { Client, Databases } from "appwrite";

// const client = new Client();

// const databases = new Databases(client);

// client
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('5df5acd0d48c2') // Your project ID
// ;

// const promise = databases.listDocuments('[DATABASE_ID]', '[COLLECTION_ID]');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });
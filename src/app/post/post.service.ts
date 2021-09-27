import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  messages: string[] = [];
  
  constructor(public http: HttpClient ) { 
  	 //this.http.get('https://reqres.in/api/users?page=2');
  }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  getPost(id: number = 0): Observable<any>{
  	let data;
  	if(id == 0){
  		data = this.http.get("https://jsonplaceholder.typicode.com/posts");	
  		
  	}else{
  		data = this.http.get("https://jsonplaceholder.typicode.com/posts/"+id);	
  	}
  	this.getAuthorSort();
  	return data;
  }
  getAutor(id: number = 0){
  	let data;
  	if(id > 0){
  		data = this.http.get('https://jsonplaceholder.typicode.com/users/'+id);	
  		return data;
  	}else if(id == 0){
  		data = this.http.get('https://jsonplaceholder.typicode.com/users');
  		return data;
  	}else{
  		return false;
  	}
  }
  getAuthorSort(){
  	let users;
  	let user = [];
  	users = this.getAutor();
  	//console.log(users);
	/*let total_autor = users.length;
	for(let x = 0; x < total_autor; x++){
		console.log(users[x].id);
		//user[users[x].id.toString()] = users[x];
	}
	return user;*/
  }
}

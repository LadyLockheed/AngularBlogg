export class AddArticleForm {


	//om man vill ha optional måste man avsluta med det (alltså i värsta fall byta ordning) 
	//Ett default värde för ett tal kan ej vara en tom sträng
    constructor(
		public newRubrik: string,
		public newName: string,
		public newStory: string,
		public readingTime?: number  
	) {}
}

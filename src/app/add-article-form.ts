export class AddArticleForm {


	//om man vill ha optional måste man avsluta med det (alltså i värsta fall byta ordning)
    constructor(
		public newRubrik: string,
		public newName: string,
		public readingTime: number,  
		public newStory: string
	) {}
}

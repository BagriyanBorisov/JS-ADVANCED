class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {picture: 200, photo: 50, item: 250};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!");
        }
        let currArticle = this.listOfArticles.find(a => a.articleName === articleName && a.articleModel === articleModel.toLowerCase());
        if (currArticle) {
            currArticle.quantity += Number(quantity);
        } else {
            this.listOfArticles.push({
                articleModel: articleModel.toLowerCase(),
                articleName: articleName,
                quantity: Number(quantity)
            });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;


    }

    inviteGuest(guestName, priority) {
        let currGuest = this.guests.find(g => g.guestName === guestName)
        if (currGuest) {
            throw new Error(`${guestName} has already been invited.`);
        }
        let points = priority === "Vip" ? 500 : priority === "Middle" ? 250 : 50;
        this.guests.push({
            guestName: guestName,
            points: points,
            purchaseArticle: 0
        });

        return `You have successfully invited ${guestName}!`

    }

    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase();
        let currArticle = this.listOfArticles.find(a => a.articleName === articleName && a.articleModel === articleModel);
        if (!currArticle) {
            throw new Error(`This article is not found.`);
        }
        if (currArticle.quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        let currGuest = this.guests.find(g => g.guestName === guestName);
        if (!currGuest) {
            return `This guest is not invited.`
        }
        if (currGuest.points < this.possibleArticles[articleModel]) {
            return "You need to more points to purchase the article.";
        }
        currGuest.points -= this.possibleArticles[articleModel];
        currGuest.purchaseArticle++;
        currArticle.quantity--;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria){
        if(criteria === "article"){
            let buff = `Articles information:`
            for(let article of this.listOfArticles){
                buff += `\n${article.articleModel} - ${article.articleName} - ${article.quantity}`;
            }
            return buff;
        }
        let buff = `Guests information:`
        for(let g of this.guests){
            buff += `\n${g.guestName} - ${g.purchaseArticle}`;
        }
        return buff;
    }
}

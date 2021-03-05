import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Picture:[
      // {key : "0", avaliable: true, name: "picture 1", price: "100k", src: "0"},
      {key : "1", avaliable: true, name: "picture 2",describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper auctor neque vitae tempus quam pellentesque nec. Dictum at tempor commodo ullamcorper a lacus. Arcu dictum varius duis at consectetur lorem donec. Viverra vitae congue eu consequat ac felis donec.", price: "100k", src: "1"},
      {key : "2", avaliable: true, name: "picture 3",describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper auctor neque vitae tempus quam pellentesque nec. Dictum at tempor commodo ullamcorper a lacus. Arcu dictum varius duis at consectetur lorem donec. Viverra vitae congue eu consequat ac felis donec.", price: "100k", src: "2"},
      {key : "3", avaliable: true, name: "picture 4",describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper auctor neque vitae tempus quam pellentesque nec. Dictum at tempor commodo ullamcorper a lacus. Arcu dictum varius duis at consectetur lorem donec. Viverra vitae congue eu consequat ac felis donec.", price: "100k", src: "3"},
      {key : "4", avaliable: true, name: "picture 5",describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper auctor neque vitae tempus quam pellentesque nec. Dictum at tempor commodo ullamcorper a lacus. Arcu dictum varius duis at consectetur lorem donec. Viverra vitae congue eu consequat ac felis donec.", price: "100k", src: "4"},
      {key : "5", avaliable: true, name: "picture 6",describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper auctor neque vitae tempus quam pellentesque nec. Dictum at tempor commodo ullamcorper a lacus. Arcu dictum varius duis at consectetur lorem donec. Viverra vitae congue eu consequat ac felis donec.", price: "100k", src: "5"},
      {key : "6", avaliable: true, name: "picture 7",describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper auctor neque vitae tempus quam pellentesque nec. Dictum at tempor commodo ullamcorper a lacus. Arcu dictum varius duis at consectetur lorem donec. Viverra vitae congue eu consequat ac felis donec.", price: "100k", src: "p0"},
      {key : "7", avaliable: true, name: "picture 8",describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper auctor neque vitae tempus quam pellentesque nec. Dictum at tempor commodo ullamcorper a lacus. Arcu dictum varius duis at consectetur lorem donec. Viverra vitae congue eu consequat ac felis donec.", price: "100k", src: "p1"},
      {key : "8", avaliable: true, name: "picture 9",describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper auctor neque vitae tempus quam pellentesque nec. Dictum at tempor commodo ullamcorper a lacus. Arcu dictum varius duis at consectetur lorem donec. Viverra vitae congue eu consequat ac felis donec.", price: "100k", src: "p2"},
      {key : "9", avaliable: true, name: "picture 10",describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper auctor neque vitae tempus quam pellentesque nec. Dictum at tempor commodo ullamcorper a lacus. Arcu dictum varius duis at consectetur lorem donec. Viverra vitae congue eu consequat ac felis donec.", price: "100k", src: "p3"},
      {key : "10", avaliable: true, name: "picture 11",describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper auctor neque vitae tempus quam pellentesque nec. Dictum at tempor commodo ullamcorper a lacus. Arcu dictum varius duis at consectetur lorem donec. Viverra vitae congue eu consequat ac felis donec.", price: "100k", src: "p5"},
      {key : "11", avaliable: true, name: "picture 12",describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper auctor neque vitae tempus quam pellentesque nec. Dictum at tempor commodo ullamcorper a lacus. Arcu dictum varius duis at consectetur lorem donec. Viverra vitae congue eu consequat ac felis donec.", price: "100k", src: "p5"},
      {key : "12", avaliable: true, name: "picture 13",describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper auctor neque vitae tempus quam pellentesque nec. Dictum at tempor commodo ullamcorper a lacus. Arcu dictum varius duis at consectetur lorem donec. Viverra vitae congue eu consequat ac felis donec.", price: "100k", src: "p7"},
      {key : "13", avaliable: true, name: "picture 14",describe:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Semper auctor neque vitae tempus quam pellentesque nec. Dictum at tempor commodo ullamcorper a lacus. Arcu dictum varius duis at consectetur lorem donec. Viverra vitae congue eu consequat ac felis donec.", price: "100k", src: "p8"},
      
    ],
    Paintings: [
      {key : "0", avaliable: true, name: "picture 7", price: "100k", src: "p0"},
      {key : "1", avaliable: true, name: "picture 8", price: "100k", src: "p1"},
      {key : "2", avaliable: true, name: "picture 9", price: "100k", src: "p2"},
      {key : "3", avaliable: true, name: "picture 10", price: "100k", src: "p3"},
      {key : "4", avaliable: true, name: "picture 11", price: "100k", src: "p4"},
      {key : "5", avaliable: true, name: "picture 12", price: "100k", src: "p5"},
      {key : "6", avaliable: true, name: "picture 13", price: "100k", src: "p6"},
      {key : "7", avaliable: true, name: "picture 14", price: "100k", src: "p7"},
      {key : "8", avaliable: true, name: "picture 14", price: "100k", src: "p8"},
    ],
    Foods:[
      {key: "0", avaliable:true, name:"Food 1", price: "30k"},
      {key: "1", avaliable:true, name:"Food 2", price: "30k"},
      {key: "2", avaliable:true, name:"Food 3", price: "30k"},
      {key: "3", avaliable:true, name:"Food 4", price: "30k"},
      {key: "4", avaliable:true, name:"Food 5", price: "30k"},
      {key: "5", avaliable:true, name:"Food 6", price: "30k"},
      {key: "6", avaliable:true, name:"Food 7", price: "30k"},
      
     
      

    ],
    Drinks:[
      {key:"0", avaliable:"true",name:"Coffee", name_content1:"name contents1", name_content2:"name contents2", name_content3:"name contents3",},
      {key:"1", avaliable:"true",name:"Beer",name_content1:"name contents1", name_content2:"name contents2", name_content3:"name contents3" },
      {key:"3", avaliable:"true",name:"Soft Drink", name_content1:"name contents1", name_content2:"name contents2", name_content3:"name contents3"},
      {key:"4", avaliable:"true",name:"Soft Drink", name_content1:"name contents1", name_content2:"name contents2", name_content3:"name contents3"},
      {key:"5", avaliable:"true",name:"Soft Drink", name_content1:"name contents1", name_content2:"name contents2", name_content3:"name contents3"},
      {key:"6", avaliable:"true",name:"Soft Drink", name_content1:"name contents1", name_content2:"name contents2", name_content3:"name contents3"}

    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

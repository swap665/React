const products = [
    { 
        id: 'product1',
        url: 'https://5.imimg.com/data5/KM/HR/MY-23006611/acc-cement-500x500.jpg', 
        detailUrl: 'https://5.imimg.com/data5/KM/HR/MY-23006611/acc-cement-500x500.jpg',
        title: {
            shortTitle: 'Cement',
            longTitle: 'ACC Cement (43 Grade ,50kg)'
        }, 
        price: {
            mrp: 1195,
            cost: 326,
            discount: '47%'
        },
        description: 'Let us know what is the ACC Cement Price today and which cement is the best. Because it costs a lot to build any building, in which cement is an important material. Therefore it is very important to know about the quality of cement so that you can use good quality cement in your house, then we are going to give you complete information about it.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product2',
        url: 'https://tse3.mm.bing.net/th?id=OIP.giB_Yfr3AeQRnw6H0706swHaF7&pid=Api&P=0', 
        detailUrl: 'https://tse3.mm.bing.net/th?id=OIP.giB_Yfr3AeQRnw6H0706swHaF7&pid=Api&P=0',
        title: {
            shortTitle: 'Indoor Tree',
            longTitle: 'Bonsai indoor tree'
        },
        price: {
            mrp: 2499,
            cost: 1899,
            discount: '40%'
        },
        description: 'Bonsai Trees, also known as miniature trees, are a type of art form that originated in China and Japan. They are grown and trained in small pots to mimic the shape and style of full-sized trees. Bonsai Trees have become increasingly popular in India and around the world, both as a hobby and as a form of decorative art.',
        discount: 'From 99+5% Off', 
        tagline: 'Indoor Tree' 
    },
    { 
        id: 'product3',
        url: 'https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/228781674281884.jpg?tr=w-938,pr-true', 
        detailUrl: 'https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/228781674281884.jpg?tr=w-938,pr-true', 
        title: {
            shortTitle: 'Sofa',
            longTitle: 'Hensley Leather Corner Sectional Sofa in Tan Brown'
        }, 
        price: {
            mrp: 440000,
            cost: 220000,
            discount: '66%'
        },
        description: 'Luxurious top-grain leather wraps around the plush comfortable cushions of our Hensley sectional sofa. With a generously padded sofa, a cozy corner section, one chaise, cushioned arms and panelled backrest, Hensley combines the most elegant modern elements of a sectional',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product4',
        url: 'https://i5.walmartimages.com/asr/38773ee3-0a0e-48eb-8319-074abab9dc5f.53e9ad0becb5bed47a51480d3f4dacc2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', 
        detailUrl: 'https://i5.walmartimages.com/asr/38773ee3-0a0e-48eb-8319-074abab9dc5f.53e9ad0becb5bed47a51480d3f4dacc2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        title: {
            shortTitle: 'Tiles',
            longTitle: 'Achim Peel & Stick Vinyl Floor Tile, 12 in x 12 in, 20 Sq. ft., Sandstone (Beige)',
        }, 
        price: {
            mrp: 400,
            cost: 200,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product5',
        url: 'https://i.pinimg.com/736x/49/e5/b2/49e5b251fb99307d94f01e1ac6a6a200.jpg',
        detailUrl: 'https://i.pinimg.com/736x/49/e5/b2/49e5b251fb99307d94f01e1ac6a6a200.jpg', 
        title: {
            shortTitle: 'Solar',
            longTitle: 'Solar'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499', 
        tagline: 'best' 
    },
    { 
        id: 'product15',
        url: 'https://www.homestratosphere.com/wp-content/uploads/2018/02/mansion-contemporary-hs-870x579.jpg.webp', 
        detailUrl: 'https://www.homestratosphere.com/wp-content/uploads/2018/02/mansion-contemporary-hs-870x579.jpg.webp',
        title: "House", 
        
        description: 'We provide 30 type of house',
         
    },
    { 
        id: 'product16',
        url: 'https://tse2.mm.bing.net/th?id=OIP.sljaMO6IW-MkS_xqnKwa5QHaE8&pid=Api&P=0', 
        detailUrl: 'https://tse2.mm.bing.net/th?id=OIP.sljaMO6IW-MkS_xqnKwa5QHaE8&pid=Api&P=0',
        title: "Industry",
        description: 'design and construction',
         
    },
    { 
        id: 'product17',
        url: 'https://img0.etsystatic.com/111/0/5579272/il_fullxfull.952897540_mlf9.jpge', 
        detailUrl: 'https://img0.etsystatic.com/111/0/5579272/il_fullxfull.952897540_mlf9.jpg', 
        title:"Cafe", 
        
        description: 'Best Place to work',
        
    },
    { 
        id: 'product18',
        url: 'https://tse2.mm.bing.net/th?id=OIP.Ka2pA4seLm1f1Q87mbrrzgHaEc&pid=Api&P=0', 
        detailUrl: 'https://tse2.mm.bing.net/th?id=OIP.Ka2pA4seLm1f1Q87mbrrzgHaEc&pid=Api&P=0',
        title: "God Home", 
       
        description: 'Temple,Church,Mosque and Gurudwara',
        
    },
    { 
        id: 'product19',
        url: 'https://tse3.mm.bing.net/th?id=OIP.R29lNc28LUNS0fz0Sb7PEQHaEh&pid=Api&P=0',
        detailUrl: 'https://tse3.mm.bing.net/th?id=OIP.R29lNc28LUNS0fz0Sb7PEQHaEh&pid=Api&P=0', 
        title: "Office",
      
        description: 'Every type of office we made',
         
    },
    { 
        id: 'product5',
        url: 'https://tse3.mm.bing.net/th?id=OIP.RZVei41-BhLiNfywm0cd3gHaDf&pid=Api&P=0',
        detailUrl: 'https://tse3.mm.bing.net/th?id=OIP.RZVei41-BhLiNfywm0cd3gHaDf&pid=Api&P=0', 
        title: "College",
      
        description: 'Every type of office we made',
         
    },
    { 
        id: 'product20',
        url: 'https://www.eyerevolution.co.uk/wp-content/uploads/2009/10/emirates-palace1.jpg',
        detailUrl: 'https://www.eyerevolution.co.uk/wp-content/uploads/2009/10/emirates-palace1.jpg', 
        title: "Hotel",
      
        description: 'Every type of office we made',
         
    },
    { 
        id: 'product6',
        url: 'https://houseandhome.com/wp-content/uploads/2020/04/BYB-Ep3029-Final-Afters2_HH_DEC20_25.jpg', 
        detailUrl: 'https://houseandhome.com/wp-content/uploads/2020/04/BYB-Ep3029-Final-Afters2_HH_DEC20_25.jpg',
        title: "Outdoor", 
        
        description: 'We provide 30 type of house',
         
    },
    { 
        id: 'product7',
        url: 'https://tse2.mm.bing.net/th?id=OIP.sljaMO6IW-MkS_xqnKwa5QHaE8&pid=Api&P=0', 
        detailUrl: 'https://tse2.mm.bing.net/th?id=OIP.sljaMO6IW-MkS_xqnKwa5QHaE8&pid=Api&P=0',
        title: "Interior",
        description: 'design and construction of industry',
         
    },
    { 
        id: 'product8',
        url: 'https://tse4.mm.bing.net/th?id=OIP.1BhhHSnFWX-XaerRMi5ArAHaFW&pid=Api&P=0', 
        detailUrl: 'https://tse4.mm.bing.net/th?id=OIP.1BhhHSnFWX-XaerRMi5ArAHaFW&pid=Api&P=0', 
        title:"Kitchen", 
        
        description: 'Best Place to work',
        
    },
    { 
        id: 'product9',
        url: 'https://tse2.mm.bing.net/th?id=OIP.yCR4jR7KhFD-LGT3YISj7wHaFj&pid=Api&P=0', 
        detailUrl: 'https://tse2.mm.bing.net/th?id=OIP.yCR4jR7KhFD-LGT3YISj7wHaFj&pid=Api&P=0',
        title: "Wall", 
       
        description: 'Temple,Church,Mosque and Gurudwara',
        
    },
    { 
        id: 'product10',
        url: 'https://tse4.mm.bing.net/th?id=OIP.VD6lCMjb0dgWxRh7PNCLtgHaGL&pid=Api&P=0',
        detailUrl: 'https://tse4.mm.bing.net/th?id=OIP.VD6lCMjb0dgWxRh7PNCLtgHaGL&pid=Api&P=0', 
        title: "Bathroom",
      
        description: 'Every type of office we made',
         
    },
    { 
        id: 'product11',
        url: 'https://tse3.mm.bing.net/th?id=OIP.S_xUpn0aM50BgS2BhsRnIAHaE7&pid=Api&P=0',
        detailUrl: 'https://tse3.mm.bing.net/th?id=OIP.S_xUpn0aM50BgS2BhsRnIAHaE7&pid=Api&P=0', 
        title: "Bedroom",
      
        description: 'Every type of office we made',
         
    },
    { 
        id: 'product12',
        url: 'https://tse3.mm.bing.net/th?id=OIP.DOb51Hz06N1fxw1FK0pjtAHaE8&pid=Api&P=0',
        detailUrl: 'https://tse3.mm.bing.net/th?id=OIP.DOb51Hz06N1fxw1FK0pjtAHaE8&pid=Api&P=0', 
        title: "Living",
      
        description: 'Every type of office we made',
         
    },
    { 
        id: 'product13',
        url: 'https://2.bp.blogspot.com/-tcUIFQ7X7No/W5DFrL2ZCjI/AAAAAAAALOA/gl0bVk5B3iEBdt09DdWWg1rj4HoJciAXgCLcBGAs/s1600/latest-fall-ceiling-designs-beautiful-latest-false-ceiling-designs-for-living-collection-and-design-bedroom-pictures-the-best-best-false-ceiling-designs-for-drawing-room.jpg',
        detailUrl: 'https://2.bp.blogspot.com/-tcUIFQ7X7No/W5DFrL2ZCjI/AAAAAAAALOA/gl0bVk5B3iEBdt09DdWWg1rj4HoJciAXgCLcBGAs/s1600/latest-fall-ceiling-designs-beautiful-latest-false-ceiling-designs-for-living-collection-and-design-bedroom-pictures-the-best-best-false-ceiling-designs-for-drawing-room.jpg', 
        title: "Ceiling",
      
        description: 'Every type of office we made',
         
    },
    { 
        id: 'product14',
        url: 'https://4.bp.blogspot.com/-fOLZqNG3_-E/V7rh4RGFD4I/AAAAAAAANz8/jasypPQdHscC6quYDD1Ect8_6yUQK347QCEw/s1600/3D-bathroom-tile-flooring-designs-.jpg',
        detailUrl: 'https://4.bp.blogspot.com/-fOLZqNG3_-E/V7rh4RGFD4I/AAAAAAAANz8/jasypPQdHscC6quYDD1Ect8_6yUQK347QCEw/s1600/3D-bathroom-tile-flooring-designs-.jpg', 
        title: "tiles",
      
        description: 'Every type of office we made',
         
    }

]
module.exports=products;
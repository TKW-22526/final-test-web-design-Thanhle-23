function addproduct(product, tid){
    const myDiv= document.createElement("div");
            myDiv.setAttribute("class","product-item col-md-3");

            const myImage= document.createElement("div");
            myImage.setAttribute("class","product-image");
            const productImg = document.createElement("img");
            productImg.setAttribute("src",product.img);
            productImg.setAttribute("alt",product.name);
            myImage.appendChild(productImg);
            myDiv.appendChild(myImage);

            const myInfo= document.createElement("div");
            myInfo.setAttribute("class","product-info");

            const name = document.createElement("h3");
            const nameText = document.createTextNode(product.name);
            name.appendChild(nameText);

            const name1 = document.createElement("h4");
            const name1Text = document.createTextNode(product.name1);
            name1.appendChild(name1Text);

            const price = document.createElement("p");
            const priceText = document.createTextNode("Giá: " + product.price.toLocaleString() + "đ");
            price.appendChild(priceText);

            const link = document.createElement("a");
            link.setAttribute("href", product.link+"?id="+product.id);
            link.setAttribute("class", "blink");
            const linkText = document.createTextNode("Xem chi tiết");
            link.appendChild(linkText);

            myInfo.appendChild(name);
            myInfo.appendChild(name1);
            myInfo.appendChild(price);
            myInfo.appendChild(link);

            myDiv.appendChild(myInfo);

            const container = document.getElementById(tid);
            container.appendChild(myDiv);
}
const trendList = [
    {
        id:1,
        name: "Beauty and a Beat",
        name1: "Justin Bieber, Nicki Minaj",
        price: 49000,
        img: "../assets/images/jb.jpg",
        link: "chi-tiet.html",
        desc: "Beauty and a Beat là một bản tuyên ngôn sôi động của âm nhạc những năm 2010, đánh dấu sự kết hợp bùng nổ giữa 'hoàng tử nhạc Pop' Justin Bieber và 'nữ hoàng rap' Nicki Minaj. Với giai điệu Electropop pha trộn EDM đầy năng lượng do phù thủy âm nhạc Max Martin và Zedd nhào nặn, bài hát không chỉ là một giai điệu bắt tai mà còn là lời mời gọi gạt bỏ mọi âu lo để hòa mình vào những vũ điệu say mê. Điểm nhấn đặc biệt nằm ở đoạn rap đầy cá tính của Nicki Minaj cùng video âm nhạc mang phong cách 'quay lén' độc đáo tại công viên nước, tạo nên một cảm giác tự do, trẻ trung và đầy sức sống. Sau hơn một thập kỷ, 'Beauty and a Beat' vẫn khẳng định sức hút bền bỉ, luôn là lựa chọn hàng đầu để khuấy động không khí trong mọi bữa tiệc."
    },
    {
        id:2,
        name: "Ordinary",
        name1: "Alex Warren",
        price: 69000,
        img: "../assets/images/aw.jpg",
        link: "chi-tiet.html",
        desc: "Bài hát Ordinary là một bản pop ballad đầy cảm xúc, đánh dấu bước ngoặt lớn trong sự nghiệp âm nhạc của anh. Ca khúc là lời tri ân sâu sắc dành cho vợ anh—Kouvr Annon, ca ngợi sức mạnh của tình yêu đích thực trong việc biến những điều tầm thường, giản đơn nhất trở thành phi thường và thiêng liêng. Với ca từ sử dụng nhiều ẩn dụ tâm linh và giai điệu sâu lắng, 'Ordinary' đã gặt hái thành công vang dội khi đứng đầu bảng xếp hạng Billboard Hot 100 trong nhiều tuần và mang về cho Alex Warren đề cử Grammy đầu tiên cho hạng mục Nghệ sĩ mới xuất sắc nhất năm 2026."
    },
    {
        id:3,
        name: "Man I Need",
        name1: "Olivia Dean",
        price: 39000,
        img: "../assets/images/od.jpg",
        link: "chi-tiet.html",
        desc: "Man I Need của Olivia Dean là một bản thánh ca hiện đại về lòng tự trọng và sự độc lập trong tình yêu. Với giai điệu tươi mới kết hợp giữa chất giọng Soul mượt mà và nhịp điệu lôi cuốn, bài hát khẳng định mạnh mẽ thông điệp về việc thấu hiểu giá trị bản thân và không chấp nhận những tiêu chuẩn thấp kém. Ca khúc không chỉ gây bão trên các bảng xếp hạng quốc tế mà còn trở thành biểu tượng cho tinh thần dám lên tiếng vì hạnh phúc riêng, giúp củng cố vị thế của Olivia Dean như một trong những nghệ sĩ hàng đầu của dòng âm nhạc đương đại."
    },
    {
        id:4,
        name: "Taylor Swift",
        name1: "Taylor Swift",
        price: 59000,
        img: "../assets/images/ts.jpg",
        link: "chi-tiet.html",
        desc: "Opalite là một bài hát của nữ ca sĩ kiêm nhạc sĩ người Mỹ Taylor Swift, nằm trong album phòng thu thứ mười hai của cô, The Life of a Showgirl (2025). Cô đã viết và sản xuất ca khúc này cùng với các nhạc sĩ người Thụy Điển Max Martin và Shellback . Được đặt tên theo loại đá opal nhân tạo , 'Opalite' là một bài hát tình yêu về cách Swift và người yêu của cô cùng nhau tạo dựng hạnh phúc sau một chuỗi những bất hạnh trong các mối quan hệ trước đó. Sử dụng phép ẩn dụ về đá quý, lời bài hát hình dung những trải nghiệm đau khổ như những đêm 'onyx' tối tăm và niềm vui sau đó như một bầu trời sáng rực, lấp lánh như ngọc trai. Đây là một ca khúc pop rock , soft rock và synth-pop sôi động , được thúc đẩy bởi âm thanh leng keng , nhịp điệu disco và sự kết hợp nhịp nhàng giữa tiếng bass và hòa âm giọng hát ."
    }
];
const albList = [
    {
        id:5,
        name: "Born to Run",
        name1: "Bruce Springsteen",
        price: 259000,
        img: "../assets/images/bs.jpg",
        link: "chi-tiet.html",
        desc: "Khi thực hiện Born to Run, Springsteen đã sống trọn vẹn với bi kịch trung tâm trong những bản tình ca buồn bã nơi khu ổ chuột (“Backstreets,” “Jungleland”) và những giai điệu rock & roll mạnh mẽ (“Thunder Road,” “Born to Run”) của album: cuộc đấu tranh để dung hòa những giấc mơ lớn với hiện thực nghiệt ngã. Anh thấy rất khó để chuyển tải âm thanh trong đầu mình — sự bùng nổ của các buổi biểu diễn trực tiếp ở Jersey, sự hùng vĩ kiểu Wagner của Phil Spector, và cả sự bi lụy đau lòng trong các bản hit của Roy Orbison — đến nỗi Springsteen suýt nữa đã hủy bỏ Born to Run để chỉ thu âm một album nhạc sống. Nhưng sự chú trọng đến từng chi tiết, dù là yếu tố quyết định thành bại, — bao gồm cả bức ảnh bìa mang tính biểu tượng của Springsteen tựa vào người chơi saxophone Clarence Clemons, một phép ẩn dụ hoàn hảo cho sự tin tưởng như anh em của Springsteen vào ban nhạc E Street Band — đã đảm bảo tính toàn vẹn cho sự thành công của Born to Run. Với quyết tâm tạo ra một album tuyệt vời, Springsteen đã tạo ra một bản thu âm vượt thời gian, đầy cảm hứng về những nỗ lực và vinh quang của việc khao khát vươn tới sự vĩ đại."
    },
    {
        id:6,
        name: "Lemonade",
        name1: "Beyoncé",
        price: 459000,
        img: "../assets/images/b.jpg",
        link: "chi-tiet.html",
        desc:"“Chín trong mười lần tôi đều chìm đắm trong cảm xúc,” Beyoncé tuyên bố trong kiệt tác về nỗi đau tan vỡ của mình, Lemonade. Cô bất ngờ phát hành album vào tối thứ Bảy, làm chấn động cả thế giới — tuyên ngôn sâu sắc và cá nhân nhất của cô, đề cập đến sự đổ vỡ hôn nhân và tình trạng của đất nước. Đó là một khía cạnh khác so với những gì cô từng thể hiện trước đây, khi cô nổi giận vì sự phản bội và ghen tuông, nhưng lại đắm chìm trong phong cách funk nữ quyền mạnh mẽ của “Formation”. Xuyên suốt Lemonade  , cô khám phá những sự phản bội trong bản sắc người Mỹ gốc Phi, khẳng định vị trí của mình trong tất cả các truyền thống âm nhạc của Mỹ — cô chuyển sang nhạc đồng quê nổi loạn trong “Daddy Lessons”, cô chơi nhạc blues metal cùng Jack White trong “Don't Hurt Yourself”, cô làm mới lại nhóm Yeah Yeah Yeahs trong “Hold Up”. Tro tàn về tro tàn, bụi bẩn về những người tình thứ hai."
    },
    {
        id:7,
        name: "Ruby",
        name1: "Jennie",
        price: 299000,
        img: "../assets/images/j.jpg",
        link: "chi-tiet.html",
        desc:"album  Ruby với tiết tấu nhanh  mạnh mẽ tập trung vào những ý tưởng thống trị dòng nhạc pop pha R&B trong những năm 2000 và 2010, đôi khi cập nhật chúng theo một cách thú vị. Nếu có nghệ sĩ nào mà bóng dáng của họ bao trùm lên album này, đó chính là Rihanna. Jennie không chỉ có khả năng ấn tượng trong việc làm chủ dòng nhạc pop-R&B ngọt ngào, mà còn có những khoảnh khắc gợi nhớ đến, nếu không phải là trực tiếp thì ít nhất cũng là hậu duệ đời thứ hai của sự nội tâm mơ màng mà nữ ca sĩ người Barbados thể hiện trong album kinh điển  Anti năm 2016 của cô . "
    },
    {
        id:8,
        name: "Take Care",
        name1: "Drake",
        price: 359000,
        img: "../assets/images/d.jpg",
        link: "chi-tiet.html",
        desc: "Rapper người Toronto đã có bước đột phá sáng tạo và thương mại với album Take Care, khẳng định hình ảnh 'Champagne Papi' - người luôn biết cách chia sẻ quá mức, dù ở câu lạc bộ hay phòng ngủ. Drake thể hiện cả sự tinh tế quyến rũ của R&B và sự ngạo nghênh của hip-hop, cùng với nhà sản xuất lâu năm Noah “40” Shebib, và các nghệ sĩ khách mời như Rihanna và Jamie xx. “Marvin's Room” là điểm nhấn của album - vào đêm khuya, Drake say xỉn gọi điện cho người yêu cũ để tìm hiểu xem chuyện gì đã xảy ra (“Tôi đã quan hệ tình dục bốn lần trong tuần này, tôi sẽ giải thích/Tôi đang gặp khó khăn trong việc thích nghi với sự nổi tiếng”). Dù khó khăn hay không, Take Care cho thấy Drake luôn tỏa sáng nhất khi anh ấy bộc lộ cảm xúc của mình trước công chúng. "
    }
];
const newList = [
    {
        id:9,
        name: "Take Me Back (Leave Me There)",
        name1: "Cody Johnson",
        price: 99000,
        img: "../assets/images/cj.jpg",
        link: "chi-tiet.html",
        desc: "Take Me Back (Leave Me There) là một bản tình ca đầy hoài niệm, nơi Cody Johnson dẫn dắt người nghe về với những ký ức nguyên bản và bình yên nhất của cuộc đời. Với chất giọng country đặc trưng, bài hát không chỉ là lời thỉnh cầu được quay lại quá khứ, mà còn là mong muốn được 'ở lại' mãi trong những khoảnh khắc quý giá bên gia đình và nguồn cội. Giai điệu mộc mạc kết hợp cùng ca từ chân thành đã chạm đúng vào sợi dây cảm xúc của những ai đang tìm kiếm sự an ủi giữa nhịp sống hối hả hiện đại."
    },
    {
        id:10,
        name: "Choosin' Texas",
        name1: "Ella Langley",
        price: 79000,
        img: "../assets/images/el.jpg",
        link: "chi-tiet.html",
        desc: "Choosin' Texas không chỉ là một bản hit đứng đầu các bảng xếp hạng, mà còn là một bản tuyên ngôn đầy cảm xúc về tình yêu và sự tự do của Ella Langley. Với chất giọng khàn đặc trưng hòa quyện cùng tiếng guitar điện sắc sảo của Tom Bukovac, bài hát mang đến một không gian âm nhạc vừa hiện đại vừa đậm chất viễn tây. Sự góp sức của Miranda Lambert trong cả khâu sáng tác lẫn sản xuất đã thổi vào ca khúc một luồng sinh khí mạnh mẽ, biến nó thành một câu chuyện kể về việc chọn lựa con đường riêng và tìm thấy sự an yên nơi mảnh đất Texas đầy nắng gió. Thành công rực rỡ với 10 tuần quán quân Billboard Hot 100 đã khẳng định vị thế của Ella Langley như một biểu tượng mới của dòng nhạc Country đương đại."
    },
    {
        id:11,
        name: "Click Clack Symphony",
        name1: "Raye, Hans Zimmer",
        price: 119000,
        img: "../assets/images/r.jpg",
        link: "chi-tiet.html",
        desc: "Click Clack Symphony là một bản giao hưởng hiện đại đầy mê hoặc, đánh dấu sự giao thoa rực rỡ giữa giọng hát nội lực của RAYE và tư duy âm nhạc vĩ đại từ Hans Zimmer. Ca khúc không chỉ đơn thuần là âm nhạc mà còn là một câu chuyện về sự hồi sinh; tiếng 'click clack' của đôi giày cao gót trở thành nhịp đập của sự tự tin, dẫn lối người nghe thoát khỏi bóng tối của sự cô độc để hòa mình vào thế giới rực rỡ bên ngoài. Với phần hòa âm tráng lệ kết hợp cùng ca từ chân thật, bài hát truyền tải thông điệp mạnh mẽ về sức mạnh của tình bạn và lòng can đảm, biến những bước đi đời thường thành một hành trình tự do đầy cảm hứng trên bầu trời Đông London."
    },
    {
        id:12,
        name: "Risk It All",
        name1: "Bruno Mars",
        price: 149000,
        img: "../assets/images/bm.jpg",
        link: "chi-tiet.html",
        desc: "Risk It All của Bruno Mars là một bản pop ballad lãng mạn nằm trong album The Romantic phát hành năm 2026. Bài hát là một lời tuyên ngôn đầy chân thành về tình yêu, nơi người đàn ông sẵn sàng đánh đổi mọi thứ—từ những thử thách phi thường như 'hái mặt trăng' hay 'leo những ngọn núi cao nhất'—chỉ để có được trái tim và sự gắn kết lâu dài với người mình yêu. Với giai điệu sâu lắng kết hợp cùng tiếng kèn mariachi và đàn dây du duyên, ca khúc mang màu sắc bolero Latin cổ điển, gợi lên cảm giác hoài cổ nhưng vẫn vô cùng mãnh liệt. MV của bài hát cũng gây xúc động khi tái hiện trọn vẹn hành trình từ lúc yêu nhau đến khi về già, khẳng định thông điệp rằng tình yêu đích thực luôn xứng đáng để chúng ta mạo hiểm tất cả."
    }
];
function loadAllProduct() {
    
    for (let i = 0; i < trendList.length; i++) {
        addproduct(trendList[i], "trend-list");
    }
    for (let i = 0; i < albList.length; i++) {
        addproduct(albList[i], "alb-list");
    }
    for (let j = 0; j < newList.length; j++) {
        addproduct(newList[j], "new-list");
    }
}

let gioHang = JSON.parse(localStorage.getItem('gioHangLocals')) || [];

function luuGioHang() {
    localStorage.setItem('gioHangLocals', JSON.stringify(gioHang));
}

function xuatDSgioHang() {
    const khung = document.getElementById('khungds');
    khung.innerHTML = ''; 
    let tongTien = 0;

    if (gioHang.length === 0) {
        khung.innerHTML = '<p style="text-align:center; color:#888; padding: 20px;">Giỏ hàng của bạn đang trống.</p>';
        document.getElementById('tongtien').innerText = '0 đ';
        return;
    }

    gioHang.forEach((sp, index) => {
        tongTien += sp.price * sp.soLuong;

        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class", "sprow");

        const img = document.createElement("img");
        img.setAttribute("src", sp.img);
        img.setAttribute("class", "spimg");
        rowDiv.appendChild(img);

        const detailsSp = document.createElement("div");
        detailsSp.setAttribute("class", "spdetails");

        const nameH4 = document.createElement("h4");
        nameH4.setAttribute("class", "spname");
        nameH4.innerText = sp.name;

        const priceP = document.createElement("p");
        priceP.setAttribute("class", "spprice");
        priceP.innerText = sp.price.toLocaleString() + " đ";

        detailsSp.appendChild(nameH4);
        detailsSp.appendChild(priceP);
        rowDiv.appendChild(detailsSp);

        const slSp = document.createElement("div");
        slSp.setAttribute("class", "soluongsp");

        const nuttru = document.createElement("button");
        nuttru.setAttribute("class", "trucong");
        nuttru.innerText = "-";
        nuttru.onclick = function() { doiSoLuongMua(sp.id, -1); };

        const soluonght = document.createElement("span");
        soluonght.setAttribute("class", "slhientai");
        soluonght.innerText = sp.soLuong;

        const nutcong = document.createElement("button");
        nutcong.setAttribute("class", "trucong");
        nutcong.innerText = "+";
        nutcong.onclick = function() { doiSoLuongMua(sp.id, 1); };
        
        const nutxoa = document.createElement("button");
        nutxoa.setAttribute("class", "xoa");
        
        nutxoa.innerText = "Xóa";
        
        nutxoa.onclick = function() { xoaKhoiGioHang(index); };

        slSp.appendChild(nuttru);
        slSp.appendChild(soluonght);
        slSp.appendChild(nutcong);
        rowDiv.appendChild(slSp);
        rowDiv.appendChild(nutxoa);

        khung.appendChild(rowDiv);
    });

    document.getElementById('tongtien').innerText = tongTien.toLocaleString() + ' đ';
}

function doiSoLuongMua(id, thayDoi) {
    let spl = gioHang.find(i => i.id === id);
    if (spl) {
        spl.soLuong += thayDoi; 
        
        if (spl.soLuong <= 0) {
            gioHang = gioHang.filter(i => i.id !== id);
        }
        
        luuGioHang(); 
        xuatDSgioHang(); 
    }
}

function xoaKhoiGioHang(index) {
    gioHang.splice(index, 1); 
    luuGioHang();
    xuatDSgioHang();
}

function themvaogio() {
    if (!product) return; 

    let spTonTai = gioHang.find(i => i.id === product.id);
    
    if (spTonTai) {
        spTonTai.soLuong += 1;
    } else {
        gioHang.push({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img, 
            soLuong: 1
        });
    }
    
    luuGioHang();
    xuatDSgioHang();
    
    document.getElementById('moPopupGioHang').checked = true;
}

document.addEventListener("DOMContentLoaded", () => {
    xuatDSgioHang();
});

function themSanPham() {
    let ten = document.getElementById('tenSPMoi').value;
    let ngheSi = document.getElementById('ngheSiSPMoi').value;
    let gia = document.getElementById('giaSPMoi').value;
    let anh = document.getElementById('anhSPMoi').value;


    if (ten === "" || ngheSi === "" || gia === "" || anh === "") {
        alert("Vui lòng điền đầy đủ thông tin bài hát!");
        return;
    }

    let sanPhamMoi = {
        id: Math.floor(Math.random() * 1000) + 100, 
        name: ten,
        name1: ngheSi,
        price: parseInt(gia), 
        img: anh,
        link: "chi-tiet.html",
        desc: "Bài hát mới được cập nhật trên hệ thống."
    };

    newList.push(sanPhamMoi);

    document.getElementById("trend-list").innerHTML = "";
    document.getElementById("alb-list").innerHTML = "";
    document.getElementById("new-list").innerHTML = "";

    loadAllProduct();

    document.getElementById('tenSPMoi').value = "";
    document.getElementById('ngheSiSPMoi').value = "";
    document.getElementById('giaSPMoi').value = "";
    document.getElementById('anhSPMoi').value = "";

    document.getElementById('moPopupThemSP').checked = false;
    alert("Thêm bài hát '" + ten + "' lên kệ thành công!");
}
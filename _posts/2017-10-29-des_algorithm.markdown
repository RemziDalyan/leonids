---
layout: post
title: "DES - 3DES Algoritmaları"
excerpt: "DES IBM tarafından geliştirilen şifreleme ve şifre çözme algoritmasıdır."
date: 2017-07-20 04:00:00
comments: true
categories: [Kriptoloji]
tags: [DES, 3DES,]
---

**<font color="red" size="5"> DES ALGORİTMASI</font>**

Açılımı Data Encryption Standard olan DES, encryption (veri şifreleme) ve decryption (şifreli veriyi çözme) için geliştirilmiş bir standarttır. Esas kullanılan yöntem DEA yani Data Encryption Algorithm (Veri Şifreleme Algoritması) adı verilir. Bu algoritmanın standartlaşmış hali DES’tir.
DES, IBM tarafından geliştirilmiş Lucifer Algoritması, Ulusal Güvenlik Ajansı’nın (NSA – National Security Agency) uygulandığı değişikliklerin ardından 1977 yılında resmi bilgi şifreleme standardı olarak kabul edildi.

DES en yaygın kullanıma sahip bir blok şifreleme algoritmasıdır. Yani şifrelenecek olan açık metin (plain text) parçalara bölünerek (blok) her parçaya birbirinden bağımsız olarak şifrelenme işlemi uygulanır. Şifrelenmiş metini (cipher text) çözmek için yine aynı anahtar kullanarak aynı bloklar üzerinde şifreleme işlemi uygulanır. Algoritma sonucunda şifrelenmiş metnin açık metni ortaya çıkar.

DES blok şifreleme örneğidir dedik. Oluşturulan bu bloklar 64 bit uzunluğundadır.

DES aynı zamanda 64 bit uzunluğunda bir anahtar alır. Bu anahtarın her 8 bitte bir tane biti parity bitidir. Şifreleme için geçerli olan uzunluk 56 bittir.

**<font color="#7f8c8d" size="3">DES’in çalışması:</font>**

<img src="{{ site.url }}/img/DES/des_birgecis.jpg" alt="{{ page.title }}">

>Des çalışma mantığı

64 bitlere bölünmüş blokların her biri öncelikle 2 parçaya ayrılır. Soldaki ve sağdaki parça ayrı ayrı işlenmektedir. Sağdaki bit bir sonraki aşamanın soldaki biti olur. Soldaki bit için Sağdaki 32 bitlik parçanın f fonksiyonuna anahtarı ile birlikte girmesi ve burada bazı işlemeler sonunda bir dönüt oluşur. Oluşan dönüt soldaki bit ile XOR’lanır (“+” işlemi) ve yeni gerçekleşecek işlemin sağ biti olur. Bu işlem 16 defa tekrar edilir.

<img src="{{ site.url }}/img/DES/des_fonk.jpg" alt="{{ page.title }}">

Yukarıdaki şekilde <i>f</i> fonksiyonunun nasıl çalıştığı gösterilmiştir. Bu fonksiyon sağdaki 32 bitlik parçayı alarak 48 bitlik anahtar ile 32 bitlik bir sonuç üretmektedir. Üretilme işlemi sırasında kritik işlem E olarak gösterilen expansion (genişleme) işlemidir. Genişletilmiş bit, anahtar ile XOR işlemine tabi tutulur. Oluşan 48 bitlik sonuç 8 bloğa bölünür. Her blok 6 bitlik parçalardan oluşur. Her 6 bitlik parça tersine expansion işlemine göre küçülerek 4 bit’e indirilmektedir. Sonuç 4 bitlik 8 blok yani toplam da 32 bitlik veri üretilmiş olur.

**<font color="#7f8c8d" size="3">Anahtar Üretimi:</font>**

<img src="{{ site.url }}/img/DES/des_anahtar.jpg" alt="{{ page.title }}">

DES için 64 bitlik anahtar üretilir. Bunun 8 biti parity bittir. Bu bitleri çıkartacak olursak bu anahtarın 56 bitlik olduğunu söylemiştik. Fakat f fonksiyonuna giren her geçişte anahtar boyutunu 48 bit olarak verilmiştir. Dolayısıyla her geçişte farklı anahtar üretilmektedir. Bu anahtarlar 56 bitlik esas anahtardan üretilir. Yukarı da bu üretim şekli belirtilmiştir.

56 bitlik anahtar sağ ve sol 28 bitlik iki parçaya ayrılır. Ortadaki 24’er bit alınıp 48 bitlik bir anahtar olur. Daha sonraki adımda her iki blok için de Left Shift işlemi uygulanır. Left Shift işleminde; tüm bitleri sola kaydırıp baştaki biti sona göndeririz. Bu işlem de 16 adımda oluşur.

DES ile şifrelenmiş bir metni açmak için yine aynı algoritmaya şifreli metni (cipher text) aynı anahtar ile vererek çözebilirsiniz.

DES’in en büyük dezavantajı anahtar uzunluğunun 56 bit olmasıdır. Bu algoritma günümüzde geliştirilen modern bilgisayarlar tarafından yapılan saldırılar (BruteForce) karşısında yetersiz kalmaktadır.

**<font color="red" size="5"> 3DES ALGORİTMASI</font>**

Üçlü DES 1978 yılında IBM tarafından geliştirilmiş olan bir şifreleme algoritmasıdır. Brute Force saldırılarına karşı koymakta zorlanan DES algoritmasının üzerine geliştirilmiştir.

3DES çift yönlü çalışan bir algoritmadır. Şifrelediğimiz veriyi geri çözmek mümkündür. DES’e göre 3 kat daha yavaş çalışmaktadır. Sebebi ise DES işlemini 3 kez yapmasıdır. Anahtar uzunluğu arttıkça şifre çözümü zorlaşır.

Şifreleme yapabilmek için 24 byte’lık anahtar kullanılır. 24*3’ten 192 bit eder. 24 byte’lerin her biri için 1 eşlik biti mevcuttur. Eşlik bitlerini çıkardığımız zaman 168 bit olur. Veri anahtarının ilk 8 byte ile veri şifrelenir. Ortadaki 8 byte ile çözülür. Son 8 byte ile tekrar şifrelenir.

<img src="{{ site.url }}/img/DES/3DES.jpg" alt="{{ page.title }}">

3DES algoritması 168 bitlik değere sahip olduğu için artık 168 bitlik verilerde kırılabilmektedir. 3DES’ten daha iyi ve hızlı olan <i>AES’in</i> kullanımının artması önemini kaybetmesine sebep olmuştur. Fakat hala bankacılık sistemi, elektronik ödeme sistemi, yazılım anahtarı oluşturma gibi yerlerde kullanılmaktadır.

***İYİ GÜNLER***

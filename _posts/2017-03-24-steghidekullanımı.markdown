---
layout: post
title: "Steghide Kullanımı"
excerpt: "<img src="{{ site.url }}/img/steghidekurma/steghide.jpg" alt="{{ page.title }}">"
date: 2017-03-24 00:00:00
comments: true
categories: [Tool]
tags: [Steghide, Tool, Embed, Extract]
---

***Stagenografi:*** Eski Yunanca'da "gizlenmiş yazı" anlamına gelir. Amacı var olan bilgi gizlemektir.

***Steghide:*** Çeşitli türlerde verileri gizleyebilen steganografi programıdır.

Bu program ile normal bir resme içinde şifrelenmiş bilgiler bulunan .txt uzantılı bir dosyayı saklabilirsiniz. Bu programın windows içinde bir UI'ı bulunmaktadır.

Şimdi artık öncelikle steghide'ı indirmekle işe başlayalım.

> sudo apt-get install steghide

yazarak aracımızı kuralım. Sizden kullanıcı şifrenizi isteyecektir. Bunu yapmasının sebebi sizin root olup olmadığınızı kullandığınız linux sürümünün anlaması içindir.

<img src="{{ site.url }}/img/steghidekurma/steghidekur1.jpg" alt="{{ page.title }}">

> steghide veya steghide --help

yazarak kurduğumuz steghide'ın versionunu ve genel kullanım şekillerini görebilirsiniz.

<img src="{{ site.url }}/img/steghidekurma/steghidekur2.jpg" alt="{{ page.title }}">

Şimdi yeni bir terminal açalım. Ben kullanacağım resim ve txt dosyasını masaüstüne attım siz başka bir dosyaya atabilirsiniz. Benim 1.png ve cokgizlibelge.txt adında dosyalarım. Şimdi bakalım bu dosyalar neyin nesiymiş. Bu dosyalara bakarken ***File*** komutunu kullanacağız. Bu yaparken bu dosyaların bulunduğu dizine çıkmanız gerekir.

<img src="{{ site.url }}/img/steghidekurma/steghidekur3.jpg" alt="{{ page.title }}">

Görüldüğü gibi standart jpeg ve standart txt dosyası. Şimdi artık saklama işlemini yapabiliriz. Bunun için resmin ve txt dosyasının bulunduğu dizinde;

> steghide embed -cf resim dosyası adı -ef gizlenecek metin dosyası adı

> ***NOT:*** resim ve txt dosyasının bulunduğu konumda bulunmanız şart değildir. bunun yerine dosya yolunu da bilirtebilirsiniz. "/Belgeler/şifreleme/1.jpg" gibi.

kodu çalıştırıyoruz. Bizden şifre girmemizi isteyecek dilerseniz şifre girebilirsiniz, dilerseniz girmezsiniz bu size kalmış bir şey olacak. Şifre girmenin olayı şudur. Biz şifre verdiğimiz zaman karşıdaki steghide çözme işlemini yapan kişi şifreyi doğru girebilirse içinde gizlenmiş verilere ulaşabilir.

<img src="{{ site.url }}/img/steghidekurma/steghidekur4.jpg" alt="{{ page.title }}">

işlem bittikten sonra txt dosyamızı siliyoruz. Bakalım jpg uzantılı dosyamızda bir farklılık var mı.

<img src="{{ site.url }}/img/steghidekurma/steghidekur5.jpg" alt="{{ page.title }}">

Görüldüğü üzere hiçbir farklılık yok. Resmi bir text editörü ile açıp yazılanlara baktığımız zaman içinde anlamlı yazılan hiçbir şey olmadığını görürüz.

Gelelim şimdi şifrelenmiş olan mesajı okumaya

> steghide extract -sf dosya yolu

kodunu çalıştırıyoruz. Ben şifre koymadığım için direk entere basıyorum. Bulunduğumuz dizine bir txt dosyayı oluşuyor açıp bakıyoruz.

<img src="{{ site.url }}/img/steghidekurma/steghidekur6.jpg" alt="{{ page.title }}">

***İYİ GÜNLER***

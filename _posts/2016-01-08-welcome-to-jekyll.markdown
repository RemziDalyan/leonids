---
title:  "GitHub.io ile Blog Oluşturma"
date:   2017-02-26 22:00:00
categories: [GitHub]
tags: [GitHub,/ GitHub.io,/ Jekyll,/ Blog,]
---

Öncelikle birkaç kavramımız bulunmakta bunları bir açıklayalım.

**`GitHub:`** Proje geliştirmek için oluşturulmuş web tabanlı depolama servisidir. Açık kaynak kodlu projeler için ücretsiz geliştirme sağlar.

**`GitHub.io:`** Kişisel blog tasarlamak ve geliştirmek için oluşturulmuştur.

**`Jekyll:`** Ruby dili ile yazılmış açık kaynak kodlu statik site oluşturucu yazılımdır.

Bu bilgileri öğrendiğimize göre şimdi öncelikle github hesabımız yok ise bir github hesabı oluşturuyoruz. Uluşamak için [buraya][buraya] tıklayınız. Daha sonra [JekyllThemes][jekyll] sitesinden beğendiğimiz bir temayı seçiyoruz. Homepage seçeneğini seçiyoruz. Bu seçenek bizi githuba yönlendirecektir.

<img src="{{ site.url }}/img/blogolusturma/themes.jpg" alt="{{ page.title }}">

Açılan sayfada forklama işlemini gerçekleştiriyoruz. Sağ üstteki fork seçeneğine tıklıyoruz. **Peki forklama işlemi nedir?** _Forklama_ işlemi yaparak var olan projeyi çoğaltıp kendimize özel hale getiriyoruz.

<img src="{{ site.url }}/img/blogolusturma/fork.jpg" alt="{{ page.title }}">

Branchler bölümünü açıyoruz, burada master olan hariç diğer tüm branchleri siliyoruz. Silme işleminden sonra _Code_ bölümüne geçiyoruz. Burada **_branch:master_** yazana tıklıyoruz ve oraya **_gh-pages_** branchini ekliyoruz.

<img src="{{ site.url }}/img/blogolusturma/gh-pages.jpg" alt="{{ page.title }}">

İşlem bittikten sonra settingse giriyoruz. Burada sağdaki panelde bulunan branch seçeneğini seçiyoruz. Burada default branchi gh-pages yapıp update ediyoruz.

<img src="{{ site.url }}/img/blogolusturma/DEFAULT.jpg" alt="{{ page.title }}">

<i class="icon-cog"></i> Optionsa geliyoruz. Dilerseniz bu bölümde projenizin isimini değiştirebilirsiniz.

<img src="{{ site.url }}/img/blogolusturma/name.jpg" alt="{{ page.title }}">

Ayarlarımızı tamamladık. Sayfamız artık güncellemelerimize hazır...

<img src="{{ site.url }}/img/blogolusturma/http.jpg" alt="{{ page.title }}">

Artık tüm bu hazırladıklarımızı locale çekmemiz lazım. Terminali açıyoruz. **_GitHub Code_** bölümünü açıyoruz. Burada <font color="#00cc00">Clone or Download</font> yazan yeşil alana tıklayıp içinde yazan linki kopyalıyoruz. Terminale geçiyoruz. Dosyayı kaydetmek istediğimiz dizine gidiyoruz. <font color="red">"cd Desktop"</font> gibi. Daha sonra **_git clone <link>_** yazıyoruz._git clone http//github.com/RemziDalyan/Moon.git_ gibi. Yükleme bittikten sonra dosyamız indirdiğimiz dizine geliyor. Dosyadaki belgeleri açabilmek için IDE (text editörü) ye ihtiyacımız var. Bunun için [sublime.text][1] veya [atom][2] kullanabilirsiniz. Dosyayı açıyoruz.

***config.yml*** dosyasındaki bilgileri kendimize göre dolduruyoruz. ***posts*** klasörüne bloğumuza yazmak istediğimiz yazıları var olan örnek gibi aynı formatta yazıp ***.markdown*** uzantısı ile kaydediyoruz.

Şimdi yaptığımız değişiklikleri githuba aktarmamız lazım. Bunun için tekrar terminali açıyoruz. Proje dosyamızın bulunduğu dizine gidiyoruz. Sırasıyla;

***git add -A***                  ; Bütün değişiklikleri eklememizi sağlar.

***git commit -m "Yorumunuz"***   ; Yaptımız değişikliğe yorum yapmamızı sağlar.

***git push origin gh-pages***   ; Yaptığımız değişiklikleri gh-pages branchine eklememizi sağlar.

Bunlara ek olarak eğer değişiklikleri github üzerinden yaparsanız bu değişiklikleri locale çekmemiz gerekir. Bunun için terminalde yine dosyanın bulunduğu dizinde ***git pull origin gh-pages*** komutunu çalıştırıyoruz.

Ve artık bir blog sitesine sahipsiniz.

**İYİ EĞLENCELER**




[buraya]:      https://github.com
[jekyll]:      http://jekyllthemes.org/
[1]:           https://www.sublimetext.com/3
[2]:           https://atom.io/

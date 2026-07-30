import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 batik-pattern opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="reveal visible">
            <h1 className="text-gradient mb-6 leading-tight">
              Keindahan Batik<br />Warisan Nusantara
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Jelajahi kekayaan budaya Indonesia melalui seni batik yang telah diakui UNESCO sebagai 
              <span className="font-semibold text-amber-700"> Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#patterns" className="btn-primary">
                Lihat Koleksi Motif
              </a>
              <a href="#about" className="btn-outline">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-700">2009</div>
              <div className="text-sm text-stone-600 mt-1">UNESCO Recognition</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-700">34+</div>
              <div className="text-sm text-stone-600 mt-1">Provinsi di Indonesia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-700">100+</div>
              <div className="text-sm text-stone-600 mt-1">Motif Tradisional</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6">
                Apa itu <span className="text-amber-700">Batik</span>?
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Batik adalah kain bergambar yang pembuatannya secara khusus dengan menuliskan atau 
                  menerakan malam (lilin) pada kain, kemudian pengolahannya diproses dengan cara tertentu 
                  yang memiliki kekhasan.
                </p>
                <p>
                  Batik Indonesia, sebagai keseluruhan teknik, teknologi, serta pengembangan motif dan 
                  budaya yang terkait, oleh UNESCO telah ditetapkan sebagai Warisan Kemanusiaan untuk 
                  Budaya Lisan dan Nonbendawi pada 2 Oktober 2009.
                </p>
                <p className="font-semibold text-amber-700">
                  Setiap motif batik memiliki filosofi dan makna mendalam yang mencerminkan nilai-nilai 
                  kehidupan, alam, dan spiritualitas masyarakat Indonesia.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="batik-placeholder aspect-square rounded-2xl card-hover"></div>
              <div className="batik-placeholder aspect-square rounded-2xl card-hover mt-8"></div>
              <div className="batik-placeholder aspect-square rounded-2xl card-hover -mt-8"></div>
              <div className="batik-placeholder aspect-square rounded-2xl card-hover"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Patterns Section */}
      <section id="patterns" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Motif <span className="text-amber-700">Batik</span> Populer
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Dari Sabang sampai Merauke, setiap daerah memiliki motif batik khas dengan 
              filosofi dan keindahan yang unik.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Batik Parang",
                origin: "Jawa Tengah & Yogyakarta",
                description: "Motif diagonal yang melambangkan kekuatan, keberanian, dan tidak pernah menyerah.",
              },
              {
                name: "Batik Kawung",
                origin: "Jawa Tengah",
                description: "Motif geometris melingkar yang melambangkan kesucian, keadilan, dan umur panjang.",
              },
              {
                name: "Batik Mega Mendung",
                origin: "Cirebon, Jawa Barat",
                description: "Motif awan yang melambangkan kesabaran dan ketabahan dalam menghadapi masalah.",
              },
              {
                name: "Batik Sekar Jagad",
                origin: "Jawa Tengah",
                description: "Motif 'Bunga Dunia' yang melambangkan keberagaman dan keindahan dunia.",
              },
              {
                name: "Batik Truntum",
                origin: "Surakarta",
                description: "Motif bintang kecil yang melambangkan cinta kasih yang tumbuh kembali.",
              },
              {
                name: "Batik Pekalongan",
                origin: "Pekalongan, Jawa Tengah",
                description: "Motif pesisir dengan warna cerah dan pengaruh budaya China, Arab, dan Eropa.",
              },
            ].map((pattern, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden card-hover shadow-sm">
                <div className="batik-placeholder aspect-video"></div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                    {pattern.name}
                  </h3>
                  <p className="text-sm text-amber-700 font-semibold mb-3">
                    {pattern.origin}
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {pattern.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Proses <span className="text-amber-700">Pembuatan</span> Batik
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Batik tulis membutuhkan ketelitian dan kesabaran tinggi. Proses pembuatan 
              satu lembar batik bisa memakan waktu berhari-hari hingga berbulan-bulan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Nyorek",
                description: "Membuat pola atau desain motif batik di atas kain mori putih menggunakan pensil.",
              },
              {
                step: "02",
                title: "Mbatik/Nglowong",
                description: "Menorehkan malam (lilin) mengikuti pola menggunakan canting untuk batik tulis.",
              },
              {
                step: "03",
                title: "Nembok",
                description: "Menutup bagian yang tidak ingin terkena warna dengan malam menggunakan kuas.",
              },
              {
                step: "04",
                title: "Pewarnaan & Nglorod",
                description: "Mencelupkan kain ke pewarna alami/sintetis, lalu merebus untuk melepas malam.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-amber-700 via-amber-800 to-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Mari Lestarikan Batik Indonesia
          </h2>
          <p className="text-lg text-amber-100 mb-8 leading-relaxed">
            Setiap kali Anda mengenakan batik, Anda turut melestarikan warisan budaya Indonesia 
            yang telah diakui dunia. Bangga memakai batik, bangga menjadi Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@batiknusantara.id" 
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-900 font-semibold px-8 py-3 rounded-full hover:bg-amber-50 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hubungi Kami
            </a>
            <a 
              href="#patterns" 
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-amber-900 transition-all"
            >
              Jelajahi Koleksi
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

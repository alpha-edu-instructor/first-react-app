import SongCard from './SongCard';

export default function SongList() {
  return (
    <main className="main">
      <h2 className="title">Ваша подборка любимых песен</h2>
      <div className="grid">
        <SongCard
          title="Party Monster"
          author="The Weekend"
          image="https://cdn1.ozone.ru/s3/multimedia-w/6260258864.jpg"
        />
        <SongCard
          title="Into it"
          author="Chase Atlantic"
          image="https://avatars.yandex.net/get-music-content/103235/66e439b2.a.4713902-1/m1000x1000?webp=false"
        />
        <SongCard
          title="I Wanna Be Yours"
          author="Arctic Monkeys"
          image="https://cdn1.ozone.ru/s3/multimedia-1-8/6958661336.jpg"
        />
        <SongCard
          title="All I Need"
          author="Ninety One"
          image="https://sun1-84.userapi.com/s/v1/if1/8VjQoXo9-xFO9Tnlqq66h_iXKvPDZ6pTEmg2dZrQumCLDSXNCWtTuU9KVWMw68KLiFxl6Ppg.jpg?size=1077x1077&quality=96&crop=2,3,1077,1077&ava=1"
        />
        <SongCard
          title="Mercy"
          author="Shawn Mendes"
          image="https://avatars.yandex.net/get-music-content/2350646/a74529a5.a.4060705-2/m1000x1000?webp=false"
        />
        <SongCard
          title="Sweater Weather"
          author="The Neighbourhood"
          image="https://main-cdn.sbermegamarket.ru/big2/hlr-system/-1/93/38/26/29/78/5/100025718522b0.jpg"
        />
      </div>
    </main>
  );
}

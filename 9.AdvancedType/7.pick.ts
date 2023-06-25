{
  // 기존의 타입에서 원하는 속성만 뽑아 사용하는 것
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Pick<Video, 'id' | 'title'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://',
      data: '하이',
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}

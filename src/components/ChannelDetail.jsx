import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log("channelDetail, videos");
  console.log(channelDetail, videos);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=data`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  return <div>ChannelDetail</div>;
};

export default ChannelDetail;

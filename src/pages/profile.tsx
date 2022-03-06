import { Grid } from "@material-ui/core";
import { Img } from "../components/StyledParts"

export default function Profile() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Img src="https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fresearch_niwa%2FNYXcjAPF3A.png?alt=media&token=ef98bc7e-b966-4a68-ac99-372428123624" />
        </Grid>
        <Grid item xs={9}>
          <div>
            丹羽遼吾<br />
            <br />
            人間総合科学学術院 人間総合科学研究群 情報学学位プログラム博士前期課程1年<br />
            デジタルネイチャー研究室所属<br />
            <br />
            Human Computer Interaction分野で研究をしています<br />
            現在の研究テーマではEMS(電気筋肉刺激)を使用して 人の筋肉・動作について研究しています<br />
            <br />
            略歴<br />
            一宮西高校 卒業<br />
            名古屋大学 情報学部 自然情報学科 入学<br />
            筑波大学 情報メディア創成学類 編入<br />
            筑波大学デジタルネイチャーグループ 加入<br />
            産業総合技術研究所 人間情報インタラクション部門 テクニカルスタッフ<br />
            Sportip iOSエンジニア<br />
            筑波大学 人間総合科学学術院 人間総合科学研究群 情報学学位プログラム 入学<br />
            <br />
            Skill <br />
            Swift&nbsp;&nbsp;Javascript&nbsp;&nbsp;TypeScript&nbsp;&nbsp;React.js&nbsp;&nbsp;Arduino&nbsp;&nbsp;English(TOEIC L/R 880)<br />
            <br />
            SNS<br />
            <span><a href="https://github.com/niwabarubossa">GitHub</a>&nbsp;&nbsp;</span>
            <a href="https://twitter.com/ryogo_niwa">Twitter</a>&nbsp;&nbsp;
            <a href="https://www.instagram.com/niwa.aaaaa/">Instagram</a>

          </div>
        </Grid>
      </Grid>
    </>
  );
}
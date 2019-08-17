<template>
  <div>
      <s-collapse v-model="names" @change="handleChange">
          <s-collapse-item name="1">
              <template #title>

                  <h5>勒布朗·詹姆斯</h5>
              </template>
              <p slot="content">勒布朗·詹姆斯（LeBron James），1984年12月30日出生于美国俄亥俄州阿克伦（Akron, Ohio），美国职业篮球运动员，司职小前锋，绰号“小皇帝”，效力于NBA洛杉矶湖人队。</p>
          </s-collapse-item>
          <s-collapse-item name="2">
              <template #title>

                  <h5>迈克尔·乔丹</h5>
              </template>
              <p slot="content">迈克尔·乔丹在在1984年NBA选秀中于第1轮第3位被芝加哥公牛队选中，职业生涯曾效力于芝加哥公牛队以及华盛顿奇才队，新秀赛季当选NBA年度最佳新秀。1986-87赛季，乔丹场均得到37.1分，首次获得NBA得分王称号。1991-93赛季，乔丹连续2次荣膺常规赛MVP（1991、1992）和3总决赛MVP（FMVP） [2-3]  ，率领芝加哥公牛队3夺NBA总冠军。1993年10月6日因父亲被害而宣布退役，两年后宣布复出。1996年入选NBA50大巨星。1996-98赛季，乔丹荣膺个人职业生涯第10次（共10次）NBA得分王以及第5次（共5次）常规赛MVP，并再次率领公牛队3夺（共6次）NBA总冠军，自己当选共第6次总决赛MVP。1999年1月13日在劳资谈判失败后再次宣布退役，两年后在华盛顿奇才队再次宣布复出。迈克尔·乔丹的职业生涯年年入选NBA全明星阵容（共14次）并3次当选NBA全明星MVP，10次入选NBA最佳阵容一阵，1985年入选NBA最佳阵容二阵，1988年荣膺NBA年度最佳防守球员，9次入选NBA最佳防守阵容一阵，3次荣膺NBA抢断王，2次夺得NBA全明星扣篮大赛冠军，1984年以及1992年夺得奥运会金牌。</p>
          </s-collapse-item>
          <s-collapse-item name="3">
              <template #title>

                  <h5 >科比·布莱恩特</h5>
              </template>
              <p slot="content">科比·布莱恩特（Kobe Bryant），1978年8月23日出生于美国宾夕法尼亚州费城，前美国职业篮球运动员，司职得分后卫/小前锋（锋卫摇摆人），绰号“黑曼巴”/“小飞侠”，是前NBA球员乔·布莱恩特的儿子。</p>
          </s-collapse-item>
      </s-collapse>
      {{names}}
      <s-collapse  v-model="activeName" @change="handleChange" accordion>
          <s-collapse-item name="1">
              <template #title>

                  <h5>勒布朗·詹姆斯</h5>
              </template>
              <p slot="content">勒布朗·詹姆斯（LeBron James），1984年12月30日出生于美国俄亥俄州阿克伦（Akron, Ohio），美国职业篮球运动员，司职小前锋，绰号“小皇帝”，效力于NBA洛杉矶湖人队。</p>
          </s-collapse-item>
          <s-collapse-item name="2">
              <template #title>

                  <h5>迈克尔·乔丹</h5>
              </template>
              <p slot="content">迈克尔·乔丹在在1984年NBA选秀中于第1轮第3位被芝加哥公牛队选中，职业生涯曾效力于芝加哥公牛队以及华盛顿奇才队，新秀赛季当选NBA年度最佳新秀。1986-87赛季，乔丹场均得到37.1分，首次获得NBA得分王称号。1991-93赛季，乔丹连续2次荣膺常规赛MVP（1991、1992）和3总决赛MVP（FMVP） [2-3]  ，率领芝加哥公牛队3夺NBA总冠军。1993年10月6日因父亲被害而宣布退役，两年后宣布复出。1996年入选NBA50大巨星。1996-98赛季，乔丹荣膺个人职业生涯第10次（共10次）NBA得分王以及第5次（共5次）常规赛MVP，并再次率领公牛队3夺（共6次）NBA总冠军，自己当选共第6次总决赛MVP。1999年1月13日在劳资谈判失败后再次宣布退役，两年后在华盛顿奇才队再次宣布复出。迈克尔·乔丹的职业生涯年年入选NBA全明星阵容（共14次）并3次当选NBA全明星MVP，10次入选NBA最佳阵容一阵，1985年入选NBA最佳阵容二阵，1988年荣膺NBA年度最佳防守球员，9次入选NBA最佳防守阵容一阵，3次荣膺NBA抢断王，2次夺得NBA全明星扣篮大赛冠军，1984年以及1992年夺得奥运会金牌。</p>
          </s-collapse-item>
          <s-collapse-item name="3">
              <template #title>

                  <h5 >科比·布莱恩特</h5>
              </template>
              <p slot="content">科比·布莱恩特（Kobe Bryant），1978年8月23日出生于美国宾夕法尼亚州费城，前美国职业篮球运动员，司职得分后卫/小前锋（锋卫摇摆人），绰号“黑曼巴”/“小飞侠”，是前NBA球员乔·布莱恩特的儿子。</p>
          </s-collapse-item>
      </s-collapse>
      {{activeName}}
  </div>
</template>

<script>
    import {SCollapse,SCollapseItem} from "@/components/collapse";

    export default {
        name: "CollapseDemo",
        components: {
            SCollapseItem,
            SCollapse
        },
        data() {
            return {
                names: ["1","3"],
                activeName:"1"
            }
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        },
    }
</script>

<style scoped>
        .s-collapse {
            margin-top: 50px;
        }
</style>

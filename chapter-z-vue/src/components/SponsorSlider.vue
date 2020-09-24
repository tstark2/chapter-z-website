<template>
    <div>
        <a :href="next.website" class="next" ref="next">
            <picture>
                <source :srcset="nextWebP" type="image/webp">
                <img :src="nextSrc" :srcset="nextPng" :alt="next.name">
            </picture>
        </a>
        <a :href="current.website" class="first" ref="first">
            <picture>
                <source :srcset="currentWebP" type="image/webp">
                <img :src="currentSrc" :srcset="currentPng" :alt="current.name">
            </picture>
        </a>
    </div>
</template>

<script>
import Sponsors from '../api/sponsors';

export default {
    name: "SponsorSlider",
    data() {
        return {
            ids: [],
            current: {},
            next: {},
            index: 0,
            nextIndex: 1,
            list: []
        }
    },
    methods: {
        sponsorIds() {
            this.ids = Sponsors.shuffle();
            this.list = Sponsors.list;
        },
        getWebpString(el) {
            let string = "";
            for(const res of el.resolutions) {
                string += `${require(`../assets/img/sponsors/${el.logo}@${res}x.webp`)} ${res}x, `;
            }
            return string;
        },
        getPngString(el) {
            let string = '';
            for(const res of el.resolutions) {
                string += `${require(`../assets/img/sponsors/${el.logo}@${res}x.png`)} ${res}x, `;
            }
            return string;
        },
        getSrcString(el) {
            return require(`../assets/img/sponsors/${el.logo}@1x.png`);
        },
        updateAds() {
            const currentId = this.ids[this.index];
            const nextId = this.ids[this.nextIndex];

            this.current = this.list[currentId];
            this.next = this.list[nextId];
        }
    },
    computed: {
        currentWebP() {
            return this.getWebpString(this.current);
        },
        currentPng() {
            return this.getPngString(this.current);
        },
        currentSrc() {
            return this.getSrcString(this.current);
        },
        nextWebP() {
            return this.getWebpString(this.next);
        },
        nextPng() {
            return this.getPngString(this.next);
        },
        nextSrc() {
            return this.getSrcString(this.next);
        }
    },
    created() {
        this.sponsorIds();
        this.updateAds();
    },
    mounted() {
        let next = this.$refs.next;
        const oThis = this;

        setInterval(() => {
            oThis.index++;
            oThis.nextIndex++;
            
            if(oThis.index > oThis.ids.length - 1) {
                oThis.index = 0;
            }
            if(oThis.nextIndex > oThis.ids.length - 1) {
                oThis.nextIndex = 0;
            }

            next.classList.add('down');

            setTimeout(() => {
                oThis.current = oThis.next;
                next.classList.add('hide');

                setTimeout(() => {
                    next.classList.remove('down');
                }, 1000)

                setTimeout(() => {
                    next.classList.remove('hide');
                    oThis.updateAds();
                }, 2000);

            }, 1500);
        }, 15000);
    }
}
</script>

<style scoped>
div {
    position:relative;
    display:block;
    width:280px;
    height:150px;
    overflow:hidden;
    box-sizing:border-box;
    border:1px solid #000;
}

a {
    width:100%;
    height:100%;
    display:block;
}

.first {
    z-index:0;
}

.next {
    position:absolute;
    top:-152px;
    left:50%;
    transform:translateX(-50%);
    transition:top 1s;
}

.next.down {
    top:0px;
}

.next.hide {
    z-index:-10;
}
</style>
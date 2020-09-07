<template>
    <div>
        <picture>
            <source :srcset="webpString" type="image/webp" />
            <img :src="srcString" :srcset="pngString" :alt="member.name" />
        </picture>
        <p class="title">{{ member.title }}</p>
        <a :href="`mailto:${member.email}`">{{ member.name}}</a>
    </div>
</template>

<script>
export default {
    name: "StaffMember",
    props: {
        member: Object
    },
    computed: {
        webpString() { 
            return `${require(`../assets/img/staff/${this.member.photo}@1x.webp`)} 1x,
             ${require(`../assets/img/staff/${this.member.photo}@2x.webp`)} 2x, 
             ${require(`../assets/img/staff/${this.member.photo}@3x.webp`)} 3x`;
            },
        pngString() {
            return `${require(`../assets/img/staff/${this.member.photo}@2x.png`)} 2x, 
            ${require(`../assets/img/staff/${this.member.photo}@3x.png`)} 3x`;
        },
        srcString() {
            return require(`../assets/img/staff/${this.member.photo}@1x.png`);
        }
    }
}
</script>

<style scoped>

</style>
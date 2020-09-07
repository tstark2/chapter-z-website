<template>
    <a :href="newsletter.webViewLink" target="_blank">
        <div>
            <p>{{fileDate}}</p>
            <i class="fas fa-file-pdf"></i>
        </div>
    </a>
</template>

<script>
export default {
    name: "Newsletter",
    props: {
        newsletter: Object
    },
    computed: {
        fileDate() {
            const month = this.newsletter.name.substring(5, 7);
            const year = this.newsletter.name.substring(0,4);
            const names = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            }

            return `${names[month]} ${year}`;
        }
    }
}
</script>

<style scoped>
a {
    text-decoration:none;
}

a:hover div {
    color:var(--yellow);
}

a div {
    border:5px solid var(--purple);
    padding:6px 12px;
    border-radius:5px;
    font-size:1.5em;
    color:var(--textColor);
    text-align:center;
}

a div p {
    margin:0;
}

a div i {
    font-size:2em;
    color:var(--purple);
    margin-top:10px;
}

a:hover div i {
    color:var(--yellow);
}
</style>
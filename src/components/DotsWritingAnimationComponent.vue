<template>
    <div class="flex flex-row items-center justify-start" style="width: 100px">
        <div style="padding-right: 4px">Writing</div>
        <div class="typing" style="margin-bottom: 3px">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">

$dot-width: 5px;
$dot-color: #3b5998;
$speed: 1.2s;

.typing {
  position: relative;

  span {
    content: '';
    animation: blink $speed infinite;
    animation-fill-mode: both;
    height: $dot-width;
    width: $dot-width;
    background: $dot-color;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;

    &:nth-child(2) {
      animation-delay: .1s;
      margin-left: $dot-width *1.5;
    }

    &:nth-child(3) {
      animation-delay: .2s;
      margin-left: $dot-width *3;
    }
  }
}

@keyframes blink {
  0% {
    opacity: .1;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: .1;
  }
}
</style>
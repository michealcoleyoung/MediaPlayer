// TODO
// Add toggle function for play and pause
// Create function to handle slide bar for song


var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'
});

wavesurfer.load('audio/BuildMeUp.wav')
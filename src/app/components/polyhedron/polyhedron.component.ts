import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-polyhedron',
  templateUrl: './polyhedron.component.html',
  styleUrls: ['./polyhedron.component.scss']
})
export class PolyhedronComponent implements AfterViewInit {
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;

  ngAfterViewInit(): void {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('FFF');
    const geometry = new THREE.DodecahedronGeometry(2);
    const cube_size = 0.1
    const cube = new THREE.BoxGeometry(cube_size, cube_size, cube_size);
    // const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new THREE.Mesh(cube, material);
    const camera = new THREE.PerspectiveCamera(
      75, 
      this.rendererContainer.nativeElement.clientWidth / this.rendererContainer.nativeElement.clientHeight, 
      0.1, 
      1000
    );

    window.addEventListener('resize', () => {
      camera.aspect = this.rendererContainer.nativeElement.clientWidth / this.rendererContainer.nativeElement.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(this.rendererContainer.nativeElement.clientWidth, this.rendererContainer.nativeElement.clientHeight);
    });
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(
      this.rendererContainer.nativeElement.clientWidth, 
      this.rendererContainer.nativeElement.clientHeight
    );
    // renderer.setSize(1920, 1080)
    renderer.setClearColor(0x444444);
    this.rendererContainer.nativeElement.appendChild(renderer.domElement);

    
    scene.add(mesh);

    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }
}
